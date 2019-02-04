#pragma once

#include <stl/vector.h>
#include <stl/unordered_map.h>
#include <ui-vg/Api.h>

#include <vg/vg.h>

#ifdef USE_UVECTOR
#define vector uvector
#elif defined USE_BUFFER
#define vector buffer
#endif

namespace stl
{
	using namespace mud;
	export_ extern template class vector<vg::GlyphPosition>;
	export_ extern template class unordered_map<string, vg::FontHandle>;
}
