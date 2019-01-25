#include <mud/infra.refl.h>
#include <mud/type.refl.h>
#include <mud/refl.h>
#include <mud/infra.h>
#include <mud/type.h>

#ifdef MUD_MODULES
module mud.type;
#else
#endif


namespace mud
{
	void mud_type_meta(Module& m)
	{
	UNUSED(m);
	
	// Base Types
	{
		static Meta meta = { type<bool>(), &namspc({}), "bool", sizeof(bool), TypeClass::BaseType };
		meta_basetype<bool>();
	}
	{
		static Meta meta = { type<char>(), &namspc({}), "char", sizeof(char), TypeClass::BaseType };
		meta_basetype<char>();
	}
	{
		static Meta meta = { type<const char*>(), &namspc({}), "const char*", sizeof(const char*), TypeClass::BaseType };
		meta_basetype<const char*>();
	}
	{
		static Meta meta = { type<double>(), &namspc({}), "double", sizeof(double), TypeClass::BaseType };
		meta_basetype<double>();
	}
	{
		static Meta meta = { type<float>(), &namspc({}), "float", sizeof(float), TypeClass::BaseType };
		meta_basetype<float>();
	}
	{
		static Meta meta = { type<int>(), &namspc({}), "int", sizeof(int), TypeClass::BaseType };
		meta_basetype<int>();
	}
	{
		static Meta meta = { type<long>(), &namspc({}), "long", sizeof(long), TypeClass::BaseType };
		meta_basetype<long>();
	}
	{
		static Meta meta = { type<long long>(), &namspc({}), "long long", sizeof(long long), TypeClass::BaseType };
		meta_basetype<long long>();
	}
	{
		static Meta meta = { type<short>(), &namspc({}), "short", sizeof(short), TypeClass::BaseType };
		meta_basetype<short>();
	}
	{
		static Meta meta = { type<string>(), &namspc({}), "string", sizeof(string), TypeClass::BaseType };
		meta_basetype<string>();
	}
	{
		static Meta meta = { type<unsigned char>(), &namspc({}), "unsigned char", sizeof(unsigned char), TypeClass::BaseType };
		meta_basetype<unsigned char>();
	}
	{
		static Meta meta = { type<unsigned int>(), &namspc({}), "unsigned int", sizeof(unsigned int), TypeClass::BaseType };
		meta_basetype<unsigned int>();
	}
	{
		static Meta meta = { type<unsigned long>(), &namspc({}), "unsigned long", sizeof(unsigned long), TypeClass::BaseType };
		meta_basetype<unsigned long>();
	}
	{
		static Meta meta = { type<unsigned long long>(), &namspc({}), "unsigned long long", sizeof(unsigned long long), TypeClass::BaseType };
		meta_basetype<unsigned long long>();
	}
	{
		static Meta meta = { type<unsigned short>(), &namspc({}), "unsigned short", sizeof(unsigned short), TypeClass::BaseType };
		meta_basetype<unsigned short>();
	}
	{
		static Meta meta = { type<void>(), &namspc({}), "void", 0, TypeClass::BaseType };
		meta_basetype<void>();
	}
	{
		static Meta meta = { type<void*>(), &namspc({}), "void*", sizeof(void*), TypeClass::BaseType };
		meta_basetype<void*>();
	}
	
	// Enums
	
	// Sequences
	{
		static Meta meta = { type<vector<mud::Ref>>(), &namspc({}), "vector<mud::Ref>", sizeof(vector<mud::Ref>), TypeClass::Sequence };
		static Class cls = { type<vector<mud::Ref>>() };
		cls.m_content = &type<mud::Ref>();
		meta_vector<vector<mud::Ref>, mud::Ref>();
	}
	
	// mud::Index
	{
		static Meta meta = { type<mud::Index>(), &namspc({ "mud" }), "Index", sizeof(mud::Index), TypeClass::Object };
		static Class cls = { type<mud::Index>(),
			// bases
			{  },
			{  },
			// constructors
			{
			},
			// copy constructor
			{
			},
			// members
			{
			},
			// methods
			{
				{ type<mud::Index>(), "indexer", member_address<mud::Indexer&(mud::Index::*)(mud::Type&)>(&mud::Index::indexer), [](Ref object, array<Var> args, Var& result) { result = Ref(&val<mud::Index>(object).indexer(val<mud::Type>(args[0]))); }, { { "type", Ref(type<mud::Type>()) } }, Ref(type<mud::Indexer>()) }
			},
			// static members
			{
				{ type<mud::Index>(), "me", Ref(&mud::Index::me) }
			}
		};
		meta_class<mud::Index>();
	}
	// mud::Indexer
	{
		static Meta meta = { type<mud::Indexer>(), &namspc({ "mud" }), "Indexer", sizeof(mud::Indexer), TypeClass::Object };
		static Class cls = { type<mud::Indexer>(),
			// bases
			{  },
			{  },
			// constructors
			{
			},
			// copy constructor
			{
			},
			// members
			{
				{ type<mud::Indexer>(), Address(), type<mud::Type>(), "type", Ref(type<mud::Type>()), Member::Flags(Member::NonMutable|Member::Link), [](Ref object) { return Ref(&val<mud::Indexer>(object).m_type); } },
				{ type<mud::Indexer>(), member_address(&mud::Indexer::m_objects), type<vector<mud::Ref>>(), "objects", var(vector<mud::Ref>()), Member::Value, nullptr }
			},
			// methods
			{
			},
			// static members
			{
			}
		};
		meta_class<mud::Indexer>();
	}
	// mud::Ref
	{
		static Meta meta = { type<mud::Ref>(), &namspc({ "mud" }), "Ref", sizeof(mud::Ref), TypeClass::Struct };
		static Class cls = { type<mud::Ref>(),
			// bases
			{  },
			{  },
			// constructors
			{
				{ type<mud::Ref>(), [](Ref ref, array<Var> args) { UNUSED(args); new(&val<mud::Ref>(ref)) mud::Ref(  ); }, {} },
				{ type<mud::Ref>(), [](Ref ref, array<Var> args) { new(&val<mud::Ref>(ref)) mud::Ref( val<void*>(args[0]), val<mud::Type>(args[1]) ); }, { { "value", Ref(), Param::Nullable }, { "type", Ref(type<mud::Type>()) } } }
			},
			// copy constructor
			{
				{ type<mud::Ref>(), [](Ref ref, Ref other) { new(&val<mud::Ref>(ref)) mud::Ref(val<mud::Ref>(other)); } }
			},
			// members
			{
				{ type<mud::Ref>(), member_address(&mud::Ref::m_type), type<mud::Type>(), "type", Ref(type<mud::Type>()), Member::Flags(Member::Pointer|Member::Link), nullptr },
				{ type<mud::Ref>(), member_address(&mud::Ref::m_value), type<void*>(), "value", Ref(), Member::Flags(Member::Pointer|Member::Link), nullptr }
			},
			// methods
			{
			},
			// static members
			{
			}
		};
		meta_class<mud::Ref>();
	}
	// mud::Type
	{
		static Meta meta = { type<mud::Type>(), &namspc({ "mud" }), "Type", sizeof(mud::Type), TypeClass::Object };
		static Class cls = { type<mud::Type>(),
			// bases
			{  },
			{  },
			// constructors
			{
			},
			// copy constructor
			{
			},
			// members
			{
				{ type<mud::Type>(), member_address(&mud::Type::m_id), type<uint32_t>(), "id", var(uint32_t()), Member::Value, nullptr },
				{ type<mud::Type>(), member_address(&mud::Type::m_name), type<const char*>(), "name", Ref(type<const char*>()), Member::Flags(Member::Pointer|Member::Link), nullptr },
				{ type<mud::Type>(), member_address(&mud::Type::m_size), type<size_t>(), "size", var(size_t()), Member::Value, nullptr },
				{ type<mud::Type>(), member_address(&mud::Type::m_base), type<mud::Type>(), "base", Ref(type<mud::Type>()), Member::Flags(Member::Pointer|Member::Link), nullptr }
			},
			// methods
			{
			},
			// static members
			{
			}
		};
		meta_class<mud::Type>();
	}
	// mud::Var
	{
		static Meta meta = { type<mud::Var>(), &namspc({ "mud" }), "Var", sizeof(mud::Var), TypeClass::Object };
		static Class cls = { type<mud::Var>(),
			// bases
			{  },
			{  },
			// constructors
			{
			},
			// copy constructor
			{
			},
			// members
			{
			},
			// methods
			{
			},
			// static members
			{
			}
		};
		meta_class<mud::Var>();
	}
		m.m_types.push_back(&type<mud::Index>());
		m.m_types.push_back(&type<mud::Indexer>());
		m.m_types.push_back(&type<mud::Ref>());
		m.m_types.push_back(&type<mud::Type>());
		m.m_types.push_back(&type<mud::Var>());
		m.m_types.push_back(&type<bool>());
		m.m_types.push_back(&type<char>());
		m.m_types.push_back(&type<const char*>());
		m.m_types.push_back(&type<double>());
		m.m_types.push_back(&type<float>());
		m.m_types.push_back(&type<int>());
		m.m_types.push_back(&type<long>());
		m.m_types.push_back(&type<long long>());
		m.m_types.push_back(&type<short>());
		m.m_types.push_back(&type<string>());
		m.m_types.push_back(&type<unsigned char>());
		m.m_types.push_back(&type<unsigned int>());
		m.m_types.push_back(&type<unsigned long>());
		m.m_types.push_back(&type<unsigned long long>());
		m.m_types.push_back(&type<unsigned short>());
		m.m_types.push_back(&type<vector<mud::Ref>>());
		m.m_types.push_back(&type<void>());
		m.m_types.push_back(&type<void*>());
		{
			auto func = [](array<Var> args, Var& result) {  result = mud::indexed(val<mud::Type>(args[0]), val<uint32_t>(args[1])); };
			vector<Param> params = { { "type", Ref(type<mud::Type>()) }, { "id", var(uint32_t()) } };
			static Function f = { &namspc({ "mud" }), "indexed", funcptr<mud::Ref(*)(mud::Type&, uint32_t)>(&mud::indexed), func, params, Ref() };
			m.m_functions.push_back(&f);
		}
	}
}

namespace mud
{
	mud_type::mud_type()
		: Module("mud::type", { &mud_infra::m() })
	{
		// setup reflection meta data
		mud_type_meta(*this);
	}
}

#ifdef MUD_TYPE_MODULE
extern "C"
Module& getModule()
{
		return mud_type::m();
}
#endif