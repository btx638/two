//#include <mud/frame.h>
#include <frame/Api.h>
#include <gfx-pbr/Api.h>

#include <xx_three/xx_three.h>

#include <stl/vector.hpp>

using namespace mud;

void xx_performance_static(Shell& app, Widget& parent, Dockbar& dockbar)
{
	UNUSED(dockbar);
	SceneViewer& viewer = ui::scene_viewer(parent);
	//ui::orbit_controller(viewer);

	Scene& scene = viewer.m_scene;

	static Program& normal = app.m_gfx.programs().fetch("normal");

	static Material& material = app.m_gfx.materials().create("normal", [&](Material& m) {
		m.m_program = &normal;
	});

	static Model& suzanne = gfx::model_suzanne(app.m_gfx);

	static bool once = false;
	if(!once)
	{
		once = true;

		Camera& camera = viewer.m_camera;
		camera.m_fov = 60.f; camera.m_near = 1.f; camera.m_far = 10'000.f;
		camera.m_eye.z = 3'200.f;

		//scene.background = new THREE.Color(0xffffff);

		for(size_t i = 0; i < 7700; i++)
		{
			vec3 position = vec3(randf(), randf(), randf()) * 10000.f - 5000.f;
			vec3 angles = vec3(randf() * c_2pi, randf() * c_2pi, 0.f);
			vec3 scale = vec3(randf() * 50 + 100);

			Node3& n = gfx::nodes(scene).add(Node3(position, quat(angles), scale));
			Item& it = gfx::items(scene).add(Item(n, suzanne, 0U, &material));
			UNUSED(it);
		}
	}

	static vec2 mouse = vec2(0.f);
	if(MouseEvent event = viewer.mouse_event(DeviceType::Mouse, EventType::Moved))
	{
		mouse = (event.m_relative - viewer.m_frame.m_size / 2.f) * 10.f;
	}

	Camera& camera = viewer.m_camera;
	camera.m_eye.x += (mouse.x - camera.m_eye.x) * .05f;
	camera.m_eye.y += (-mouse.y - camera.m_eye.y) * .05f;
}