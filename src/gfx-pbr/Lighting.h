

#pragma once

#ifndef MUD_MODULES
#include <stl/vector.h>
#include <gfx/Renderer.h>
#include <gfx/Light.h>
#include <gfx/Texture.h>
#endif
#include <gfx-pbr/Forward.h>

namespace mud
{
	enum ShaderOptionLight : unsigned int
	{
		SKY_LIGHT,
		FOG,
	};

	struct gpu_ GpuBone
	{
		attr_ mat4 matrix;
	};

	struct gpu_ GpuShadow
	{
		attr_ float matrix;
		attr_ float bias;
		attr_ float radius;
		attr_ float range;
		attr_ vec2 atlas_slot;
		attr_ vec2 atlas_subdiv;
	};

	struct gpu_ GpuCSMShadow
	{
		attr_ float num_slices;
		attr_ vec4 splits;
		attr_ vec4 matrices;
	};

	struct gpu_ GpuLight
	{
		attr_ vec3 position;
		attr_ float range;
		attr_ vec3 energy;
		attr_ float specular;
		attr_ vec3 direction;
		attr_ float attenuation;
		attr_ float spot_attenuation;
		attr_ float spot_cutoff;

		attr_ GpuShadow shadow;
		attr_ GpuCSMShadow csm;
	};

	export_ MUD_GFX_PBR_EXPORT void debug_draw_light_clusters(Gnode& parent, Viewport& viewport, Camera& camera);
	export_ MUD_GFX_PBR_EXPORT void debug_draw_light_slices(Gnode& parent, Light& light, bool frustums = true, bool bounds = true);

#ifdef MUD_PLATFORM_EMSCRIPTEN
	constexpr size_t c_max_forward_lights = 32;
#else
	constexpr size_t c_max_forward_lights = 64;
#endif

	struct ZoneLights
	{
		vec4 m_light_indices[c_max_forward_lights];
		vec4 m_light_counts;
		vec4 m_shadow_counts;
		uint16_t m_light_count;
	};

	export_ class refl_ MUD_GFX_PBR_EXPORT BlockLight : public DrawBlock
	{
	public:
		BlockLight(GfxSystem& gfx);

		virtual void init_block() override;

		virtual void begin_render(Render& render) override;

		virtual void options(Render& render, ProgramVersion& program) const final;
		virtual void submit(Render& render, const Pass& pass) const final;
		virtual void submit(Render& render, const DrawElement& element, const Pass& pass) const final;

		void setup_lights(Render& render, const mat4& view);
		void setup_zones(Render& render);

		void upload_lights(Render& render);
		void upload_zones(Render& render);

		void commit_zones(Render& render, const Pass& pass) const;
		void commit_lights(Render& render, const Pass& pass) const;

		uint16_t m_direct_light_index = 0;
		Light* m_direct_light = nullptr;
		vector<Light*> m_direct_lights;

		struct ShotUniform
		{
			void createUniforms()
			{
				s_zones = bgfx::createUniform("s_zones", bgfx::UniformType::Sampler, 1U, bgfx::UniformFreq::View);
				s_lights = bgfx::createUniform("s_lights", bgfx::UniformType::Sampler, 1U, bgfx::UniformFreq::View);
			}

			bgfx::UniformHandle s_zones;
			bgfx::UniformHandle s_lights;

		} u_shot;

		uint16_t m_light_count;

		ZoneLights m_zones[1];

		vector<GpuLight> m_gpu_lights;

		Texture m_zones_texture = {};
		Texture m_lights_texture = {};
	};
}
