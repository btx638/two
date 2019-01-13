
// Bindings utilities
function WrapperObject() {
}
// BCS
function BCS() {
    var self = this.ptr;
    this.ptr = _mud_BCS_BCS_0(self); getCache(BCS)[this.ptr] = this;
};
BCS.prototype = Object.create(WrapperObject.prototype);
BCS.prototype.constructor = BCS;
BCS.prototype.__class__ = BCS;
BCS.__cache__ = {};
Module['BCS'] = BCS;
Object.defineProperty(BCS.prototype, "enabled", {
    get: function() {
        var self = this.ptr;
        return !!(_mud_BCS__get_enabled(self));
    },
    set: function(enabled) {
        var self = this.ptr;
        /* enabled <bool> [] */
        _mud_BCS__set_enabled(self, enabled);
    }
});
Object.defineProperty(BCS.prototype, "brightness", {
    get: function() {
        var self = this.ptr;
        return _mud_BCS__get_brightness(self);
    },
    set: function(brightness) {
        var self = this.ptr;
        /* brightness <float> [] */
        _mud_BCS__set_brightness(self, brightness);
    }
});
Object.defineProperty(BCS.prototype, "contrast", {
    get: function() {
        var self = this.ptr;
        return _mud_BCS__get_contrast(self);
    },
    set: function(contrast) {
        var self = this.ptr;
        /* contrast <float> [] */
        _mud_BCS__set_contrast(self, contrast);
    }
});
Object.defineProperty(BCS.prototype, "saturation", {
    get: function() {
        var self = this.ptr;
        return _mud_BCS__get_saturation(self);
    },
    set: function(saturation) {
        var self = this.ptr;
        /* saturation <float> [] */
        _mud_BCS__set_saturation(self, saturation);
    }
});
BCS.prototype["__destroy__"] = BCS.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_BCS__destroy(self);
};
// DofBlur
function DofBlur() {
    var self = this.ptr;
    this.ptr = _mud_DofBlur_DofBlur_0(self); getCache(DofBlur)[this.ptr] = this;
};
DofBlur.prototype = Object.create(WrapperObject.prototype);
DofBlur.prototype.constructor = DofBlur;
DofBlur.prototype.__class__ = DofBlur;
DofBlur.__cache__ = {};
Module['DofBlur'] = DofBlur;
Object.defineProperty(DofBlur.prototype, "enabled", {
    get: function() {
        var self = this.ptr;
        return !!(_mud_DofBlur__get_enabled(self));
    },
    set: function(enabled) {
        var self = this.ptr;
        /* enabled <bool> [] */
        _mud_DofBlur__set_enabled(self, enabled);
    }
});
Object.defineProperty(DofBlur.prototype, "far_distance", {
    get: function() {
        var self = this.ptr;
        return _mud_DofBlur__get_far_distance(self);
    },
    set: function(far_distance) {
        var self = this.ptr;
        /* far_distance <float> [] */
        _mud_DofBlur__set_far_distance(self, far_distance);
    }
});
Object.defineProperty(DofBlur.prototype, "far_transition", {
    get: function() {
        var self = this.ptr;
        return _mud_DofBlur__get_far_transition(self);
    },
    set: function(far_transition) {
        var self = this.ptr;
        /* far_transition <float> [] */
        _mud_DofBlur__set_far_transition(self, far_transition);
    }
});
Object.defineProperty(DofBlur.prototype, "far_radius", {
    get: function() {
        var self = this.ptr;
        return _mud_DofBlur__get_far_radius(self);
    },
    set: function(far_radius) {
        var self = this.ptr;
        /* far_radius <float> [] */
        _mud_DofBlur__set_far_radius(self, far_radius);
    }
});
Object.defineProperty(DofBlur.prototype, "near_distance", {
    get: function() {
        var self = this.ptr;
        return _mud_DofBlur__get_near_distance(self);
    },
    set: function(near_distance) {
        var self = this.ptr;
        /* near_distance <float> [] */
        _mud_DofBlur__set_near_distance(self, near_distance);
    }
});
Object.defineProperty(DofBlur.prototype, "near_transition", {
    get: function() {
        var self = this.ptr;
        return _mud_DofBlur__get_near_transition(self);
    },
    set: function(near_transition) {
        var self = this.ptr;
        /* near_transition <float> [] */
        _mud_DofBlur__set_near_transition(self, near_transition);
    }
});
Object.defineProperty(DofBlur.prototype, "near_radius", {
    get: function() {
        var self = this.ptr;
        return _mud_DofBlur__get_near_radius(self);
    },
    set: function(near_radius) {
        var self = this.ptr;
        /* near_radius <float> [] */
        _mud_DofBlur__set_near_radius(self, near_radius);
    }
});
Object.defineProperty(DofBlur.prototype, "max_coc_radius", {
    get: function() {
        var self = this.ptr;
        return _mud_DofBlur__get_max_coc_radius(self);
    },
    set: function(max_coc_radius) {
        var self = this.ptr;
        /* max_coc_radius <float> [] */
        _mud_DofBlur__set_max_coc_radius(self, max_coc_radius);
    }
});
DofBlur.prototype["__destroy__"] = DofBlur.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_DofBlur__destroy(self);
};
// GIProbe
function GIProbe() { throw "cannot construct a GIProbe, no constructor in IDL" }
GIProbe.prototype = Object.create(WrapperObject.prototype);
GIProbe.prototype.constructor = GIProbe;
GIProbe.prototype.__class__ = GIProbe;
GIProbe.__cache__ = {};
Module['GIProbe'] = GIProbe;
GIProbe.prototype["__destroy__"] = GIProbe.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_GIProbe__destroy(self);
};
// Glow
function Glow() {
    var self = this.ptr;
    this.ptr = _mud_Glow_Glow_0(self); getCache(Glow)[this.ptr] = this;
};
Glow.prototype = Object.create(WrapperObject.prototype);
Glow.prototype.constructor = Glow;
Glow.prototype.__class__ = Glow;
Glow.__cache__ = {};
Module['Glow'] = Glow;
Object.defineProperty(Glow.prototype, "enabled", {
    get: function() {
        var self = this.ptr;
        return !!(_mud_Glow__get_enabled(self));
    },
    set: function(enabled) {
        var self = this.ptr;
        /* enabled <bool> [] */
        _mud_Glow__set_enabled(self, enabled);
    }
});
Object.defineProperty(Glow.prototype, "levels_1_4", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_mud_Glow__get_levels_1_4(self), mud::vec4);
    },
    set: function(levels_1_4) {
        var self = this.ptr;
        /* levels_1_4 <vec4> [] */
        levels_1_4 = levels_1_4.ptr;
        _mud_Glow__set_levels_1_4(self, levels_1_4);
    }
});
Object.defineProperty(Glow.prototype, "levels_5_8", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_mud_Glow__get_levels_5_8(self), mud::vec4);
    },
    set: function(levels_5_8) {
        var self = this.ptr;
        /* levels_5_8 <vec4> [] */
        levels_5_8 = levels_5_8.ptr;
        _mud_Glow__set_levels_5_8(self, levels_5_8);
    }
});
Object.defineProperty(Glow.prototype, "intensity", {
    get: function() {
        var self = this.ptr;
        return _mud_Glow__get_intensity(self);
    },
    set: function(intensity) {
        var self = this.ptr;
        /* intensity <float> [] */
        _mud_Glow__set_intensity(self, intensity);
    }
});
Object.defineProperty(Glow.prototype, "bloom", {
    get: function() {
        var self = this.ptr;
        return _mud_Glow__get_bloom(self);
    },
    set: function(bloom) {
        var self = this.ptr;
        /* bloom <float> [] */
        _mud_Glow__set_bloom(self, bloom);
    }
});
Object.defineProperty(Glow.prototype, "bleed_threshold", {
    get: function() {
        var self = this.ptr;
        return _mud_Glow__get_bleed_threshold(self);
    },
    set: function(bleed_threshold) {
        var self = this.ptr;
        /* bleed_threshold <float> [] */
        _mud_Glow__set_bleed_threshold(self, bleed_threshold);
    }
});
Object.defineProperty(Glow.prototype, "bleed_scale", {
    get: function() {
        var self = this.ptr;
        return _mud_Glow__get_bleed_scale(self);
    },
    set: function(bleed_scale) {
        var self = this.ptr;
        /* bleed_scale <float> [] */
        _mud_Glow__set_bleed_scale(self, bleed_scale);
    }
});
Object.defineProperty(Glow.prototype, "bicubic_filter", {
    get: function() {
        var self = this.ptr;
        return !!(_mud_Glow__get_bicubic_filter(self));
    },
    set: function(bicubic_filter) {
        var self = this.ptr;
        /* bicubic_filter <bool> [] */
        _mud_Glow__set_bicubic_filter(self, bicubic_filter);
    }
});
Glow.prototype["__destroy__"] = Glow.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_Glow__destroy(self);
};
// LightShadow
function LightShadow() {
    var self = this.ptr;
    this.ptr = _mud_LightShadow_LightShadow_0(self); getCache(LightShadow)[this.ptr] = this;
};
LightShadow.prototype = Object.create(WrapperObject.prototype);
LightShadow.prototype.constructor = LightShadow;
LightShadow.prototype.__class__ = LightShadow;
LightShadow.__cache__ = {};
Module['LightShadow'] = LightShadow;
LightShadow.prototype["__destroy__"] = LightShadow.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_LightShadow__destroy(self);
};
// Lightmap
function Lightmap() { throw "cannot construct a Lightmap, no constructor in IDL" }
Lightmap.prototype = Object.create(WrapperObject.prototype);
Lightmap.prototype.constructor = Lightmap;
Lightmap.prototype.__class__ = Lightmap;
Lightmap.__cache__ = {};
Module['Lightmap'] = Lightmap;
Lightmap.prototype["__destroy__"] = Lightmap.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_Lightmap__destroy(self);
};
// LightmapAtlas
function LightmapAtlas() { throw "cannot construct a LightmapAtlas, no constructor in IDL" }
LightmapAtlas.prototype = Object.create(WrapperObject.prototype);
LightmapAtlas.prototype.constructor = LightmapAtlas;
LightmapAtlas.prototype.__class__ = LightmapAtlas;
LightmapAtlas.__cache__ = {};
Module['LightmapAtlas'] = LightmapAtlas;
LightmapAtlas.prototype["__destroy__"] = LightmapAtlas.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_LightmapAtlas__destroy(self);
};
// LightmapItem
function LightmapItem() { throw "cannot construct a LightmapItem, no constructor in IDL" }
LightmapItem.prototype = Object.create(WrapperObject.prototype);
LightmapItem.prototype.constructor = LightmapItem;
LightmapItem.prototype.__class__ = LightmapItem;
LightmapItem.__cache__ = {};
Module['LightmapItem'] = LightmapItem;
LightmapItem.prototype["__destroy__"] = LightmapItem.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_LightmapItem__destroy(self);
};
// ReflectionProbe
function ReflectionProbe() { throw "cannot construct a ReflectionProbe, no constructor in IDL" }
ReflectionProbe.prototype = Object.create(WrapperObject.prototype);
ReflectionProbe.prototype.constructor = ReflectionProbe;
ReflectionProbe.prototype.__class__ = ReflectionProbe;
ReflectionProbe.__cache__ = {};
Module['ReflectionProbe'] = ReflectionProbe;
Object.defineProperty(ReflectionProbe.prototype, "node", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_mud_ReflectionProbe__get_node(self), mud::Node3);
    }});
Object.defineProperty(ReflectionProbe.prototype, "visible", {
    get: function() {
        var self = this.ptr;
        return !!(_mud_ReflectionProbe__get_visible(self));
    },
    set: function(visible) {
        var self = this.ptr;
        /* visible <bool> [] */
        _mud_ReflectionProbe__set_visible(self, visible);
    }
});
Object.defineProperty(ReflectionProbe.prototype, "intensity", {
    get: function() {
        var self = this.ptr;
        return _mud_ReflectionProbe__get_intensity(self);
    },
    set: function(intensity) {
        var self = this.ptr;
        /* intensity <float> [] */
        _mud_ReflectionProbe__set_intensity(self, intensity);
    }
});
Object.defineProperty(ReflectionProbe.prototype, "extents", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_mud_ReflectionProbe__get_extents(self), mud::vec3);
    },
    set: function(extents) {
        var self = this.ptr;
        /* extents <vec3> [] */
        extents = extents.ptr;
        _mud_ReflectionProbe__set_extents(self, extents);
    }
});
Object.defineProperty(ReflectionProbe.prototype, "shadows", {
    get: function() {
        var self = this.ptr;
        return !!(_mud_ReflectionProbe__get_shadows(self));
    },
    set: function(shadows) {
        var self = this.ptr;
        /* shadows <bool> [] */
        _mud_ReflectionProbe__set_shadows(self, shadows);
    }
});
Object.defineProperty(ReflectionProbe.prototype, "dirty", {
    get: function() {
        var self = this.ptr;
        return !!(_mud_ReflectionProbe__get_dirty(self));
    },
    set: function(dirty) {
        var self = this.ptr;
        /* dirty <bool> [] */
        _mud_ReflectionProbe__set_dirty(self, dirty);
    }
});
ReflectionProbe.prototype["__destroy__"] = ReflectionProbe.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_ReflectionProbe__destroy(self);
};
// RenderFilters
function RenderFilters() {
    var self = this.ptr;
    this.ptr = _mud_RenderFilters_RenderFilters_0(self); getCache(RenderFilters)[this.ptr] = this;
};
RenderFilters.prototype = Object.create(WrapperObject.prototype);
RenderFilters.prototype.constructor = RenderFilters;
RenderFilters.prototype.__class__ = RenderFilters;
RenderFilters.__cache__ = {};
Module['RenderFilters'] = RenderFilters;
Object.defineProperty(RenderFilters.prototype, "dof_blur", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_mud_RenderFilters__get_dof_blur(self), mud::DofBlur);
    },
    set: function(dof_blur) {
        var self = this.ptr;
        /* dof_blur <DofBlur> [] */
        dof_blur = dof_blur.ptr;
        _mud_RenderFilters__set_dof_blur(self, dof_blur);
    }
});
Object.defineProperty(RenderFilters.prototype, "glow", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_mud_RenderFilters__get_glow(self), mud::Glow);
    },
    set: function(glow) {
        var self = this.ptr;
        /* glow <Glow> [] */
        glow = glow.ptr;
        _mud_RenderFilters__set_glow(self, glow);
    }
});
Object.defineProperty(RenderFilters.prototype, "bcs", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_mud_RenderFilters__get_bcs(self), mud::BCS);
    },
    set: function(bcs) {
        var self = this.ptr;
        /* bcs <BCS> [] */
        bcs = bcs.ptr;
        _mud_RenderFilters__set_bcs(self, bcs);
    }
});
Object.defineProperty(RenderFilters.prototype, "tonemap", {
    get: function() {
        var self = this.ptr;
        return wrapPointer(_mud_RenderFilters__get_tonemap(self), mud::Tonemap);
    },
    set: function(tonemap) {
        var self = this.ptr;
        /* tonemap <Tonemap> [] */
        tonemap = tonemap.ptr;
        _mud_RenderFilters__set_tonemap(self, tonemap);
    }
});
RenderFilters.prototype["__destroy__"] = RenderFilters.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_RenderFilters__destroy(self);
};
// Tonemap
function Tonemap() {
    var self = this.ptr;
    this.ptr = _mud_Tonemap_Tonemap_0(self); getCache(Tonemap)[this.ptr] = this;
};
Tonemap.prototype = Object.create(WrapperObject.prototype);
Tonemap.prototype.constructor = Tonemap;
Tonemap.prototype.__class__ = Tonemap;
Tonemap.__cache__ = {};
Module['Tonemap'] = Tonemap;
Object.defineProperty(Tonemap.prototype, "mode", {
    get: function() {
        var self = this.ptr;
        return _mud_Tonemap__get_mode(self);
    },
    set: function(mode) {
        var self = this.ptr;
        /* mode <TonemapMode> [] */
        if (mode && typeof mode === "object") mode = mode.ptr;
        _mud_Tonemap__set_mode(self, mode);
    }
});
Object.defineProperty(Tonemap.prototype, "enabled", {
    get: function() {
        var self = this.ptr;
        return !!(_mud_Tonemap__get_enabled(self));
    },
    set: function(enabled) {
        var self = this.ptr;
        /* enabled <bool> [] */
        _mud_Tonemap__set_enabled(self, enabled);
    }
});
Object.defineProperty(Tonemap.prototype, "exposure", {
    get: function() {
        var self = this.ptr;
        return _mud_Tonemap__get_exposure(self);
    },
    set: function(exposure) {
        var self = this.ptr;
        /* exposure <float> [] */
        _mud_Tonemap__set_exposure(self, exposure);
    }
});
Object.defineProperty(Tonemap.prototype, "white_point", {
    get: function() {
        var self = this.ptr;
        return _mud_Tonemap__get_white_point(self);
    },
    set: function(white_point) {
        var self = this.ptr;
        /* white_point <float> [] */
        _mud_Tonemap__set_white_point(self, white_point);
    }
});
Tonemap.prototype["__destroy__"] = Tonemap.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_Tonemap__destroy(self);
};
// BlockBlur
function BlockBlur() { throw "cannot construct a BlockBlur, no constructor in IDL" }
BlockBlur.prototype = Object.create(WrapperObject.prototype);
BlockBlur.prototype.constructor = BlockBlur;
BlockBlur.prototype.__class__ = BlockBlur;
BlockBlur.__cache__ = {};
Module['BlockBlur'] = BlockBlur;
BlockBlur.prototype["__destroy__"] = BlockBlur.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_BlockBlur__destroy(self);
};
// BlockDofBlur
function BlockDofBlur() { throw "cannot construct a BlockDofBlur, no constructor in IDL" }
BlockDofBlur.prototype = Object.create(WrapperObject.prototype);
BlockDofBlur.prototype.constructor = BlockDofBlur;
BlockDofBlur.prototype.__class__ = BlockDofBlur;
BlockDofBlur.__cache__ = {};
Module['BlockDofBlur'] = BlockDofBlur;
BlockDofBlur.prototype["__destroy__"] = BlockDofBlur.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_BlockDofBlur__destroy(self);
};
// BlockGIBake
function BlockGIBake() { throw "cannot construct a BlockGIBake, no constructor in IDL" }
BlockGIBake.prototype = Object.create(WrapperObject.prototype);
BlockGIBake.prototype.constructor = BlockGIBake;
BlockGIBake.prototype.__class__ = BlockGIBake;
BlockGIBake.__cache__ = {};
Module['BlockGIBake'] = BlockGIBake;
BlockGIBake.prototype["__destroy__"] = BlockGIBake.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_BlockGIBake__destroy(self);
};
// BlockGITrace
function BlockGITrace() { throw "cannot construct a BlockGITrace, no constructor in IDL" }
BlockGITrace.prototype = Object.create(WrapperObject.prototype);
BlockGITrace.prototype.constructor = BlockGITrace;
BlockGITrace.prototype.__class__ = BlockGITrace;
BlockGITrace.__cache__ = {};
Module['BlockGITrace'] = BlockGITrace;
BlockGITrace.prototype["__destroy__"] = BlockGITrace.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_BlockGITrace__destroy(self);
};
// BlockGeometry
function BlockGeometry() { throw "cannot construct a BlockGeometry, no constructor in IDL" }
BlockGeometry.prototype = Object.create(WrapperObject.prototype);
BlockGeometry.prototype.constructor = BlockGeometry;
BlockGeometry.prototype.__class__ = BlockGeometry;
BlockGeometry.__cache__ = {};
Module['BlockGeometry'] = BlockGeometry;
BlockGeometry.prototype["__destroy__"] = BlockGeometry.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_BlockGeometry__destroy(self);
};
// BlockGlow
function BlockGlow() { throw "cannot construct a BlockGlow, no constructor in IDL" }
BlockGlow.prototype = Object.create(WrapperObject.prototype);
BlockGlow.prototype.constructor = BlockGlow;
BlockGlow.prototype.__class__ = BlockGlow;
BlockGlow.__cache__ = {};
Module['BlockGlow'] = BlockGlow;
BlockGlow.prototype["__destroy__"] = BlockGlow.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_BlockGlow__destroy(self);
};
// BlockLight
function BlockLight() { throw "cannot construct a BlockLight, no constructor in IDL" }
BlockLight.prototype = Object.create(WrapperObject.prototype);
BlockLight.prototype.constructor = BlockLight;
BlockLight.prototype.__class__ = BlockLight;
BlockLight.__cache__ = {};
Module['BlockLight'] = BlockLight;
BlockLight.prototype["__destroy__"] = BlockLight.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_BlockLight__destroy(self);
};
// BlockLightmap
function BlockLightmap() { throw "cannot construct a BlockLightmap, no constructor in IDL" }
BlockLightmap.prototype = Object.create(WrapperObject.prototype);
BlockLightmap.prototype.constructor = BlockLightmap;
BlockLightmap.prototype.__class__ = BlockLightmap;
BlockLightmap.__cache__ = {};
Module['BlockLightmap'] = BlockLightmap;
BlockLightmap.prototype["__destroy__"] = BlockLightmap.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_BlockLightmap__destroy(self);
};
// BlockRadiance
function BlockRadiance() { throw "cannot construct a BlockRadiance, no constructor in IDL" }
BlockRadiance.prototype = Object.create(WrapperObject.prototype);
BlockRadiance.prototype.constructor = BlockRadiance;
BlockRadiance.prototype.__class__ = BlockRadiance;
BlockRadiance.__cache__ = {};
Module['BlockRadiance'] = BlockRadiance;
BlockRadiance.prototype["__destroy__"] = BlockRadiance.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_BlockRadiance__destroy(self);
};
// BlockReflection
function BlockReflection() { throw "cannot construct a BlockReflection, no constructor in IDL" }
BlockReflection.prototype = Object.create(WrapperObject.prototype);
BlockReflection.prototype.constructor = BlockReflection;
BlockReflection.prototype.__class__ = BlockReflection;
BlockReflection.__cache__ = {};
Module['BlockReflection'] = BlockReflection;
BlockReflection.prototype["__destroy__"] = BlockReflection.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_BlockReflection__destroy(self);
};
// BlockShadow
function BlockShadow() { throw "cannot construct a BlockShadow, no constructor in IDL" }
BlockShadow.prototype = Object.create(WrapperObject.prototype);
BlockShadow.prototype.constructor = BlockShadow;
BlockShadow.prototype.__class__ = BlockShadow;
BlockShadow.__cache__ = {};
Module['BlockShadow'] = BlockShadow;
BlockShadow.prototype["__destroy__"] = BlockShadow.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_BlockShadow__destroy(self);
};
// BlockTonemap
function BlockTonemap() { throw "cannot construct a BlockTonemap, no constructor in IDL" }
BlockTonemap.prototype = Object.create(WrapperObject.prototype);
BlockTonemap.prototype.constructor = BlockTonemap;
BlockTonemap.prototype.__class__ = BlockTonemap;
BlockTonemap.__cache__ = {};
Module['BlockTonemap'] = BlockTonemap;
BlockTonemap.prototype["__destroy__"] = BlockTonemap.prototype.__destroy__ = function() {
    var self = this.ptr;
    _mud_BlockTonemap__destroy(self);
};

(function() {
    function setupEnums() {
        // TonemapMode
        Module['TonemapMode']['Linear'] = _mud_TonemapMode_Linear();
        Module['TonemapMode']['Reinhardt'] = _mud_TonemapMode_Reinhardt();
        Module['TonemapMode']['Filmic'] = _mud_TonemapMode_Filmic();
        Module['TonemapMode']['ACES'] = _mud_TonemapMode_ACES();
    }
    if (Module['calledRun']) setupEnums();
    else addOnPreMain(setupEnums);
})();