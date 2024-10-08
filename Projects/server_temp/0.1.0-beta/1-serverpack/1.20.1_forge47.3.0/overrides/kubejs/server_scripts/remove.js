// priority: 10
onEvent('recipes', event => {
	//
    // ================================== remove all recipes for type =========================================================
	//
	event.remove({type: 'minecraft:campfire_cooking'})
	event.remove({type: 'minecraft:smelting'})
    event.remove({type: 'mekanism:sawing'})
	//
	// ===================================== other mods =========================================================================
	//
	event.remove({output: ['#forge:sheets'], mod: 'tfc_ie_addon'})
	event.remove({output: ['#forge:plates'], mod: 'tfc_ie_addon'})
	event.remove({output: ['#forge:rods'], mod: 'tfc_ie_addon'})
	event.remove({output: ['#forge:dyes'], mod: 'tfc_ie_addon'})
	event.remove({output: ['#forge:dyes'], mod: 'create'})
	event.remove({output: ['#forge:dyes'], mod: 'mekanism'})
	event.remove({output: ['#forge:dyes'], mod: 'farmersdelight'})
	event.remove({output: ['#forge:leather'], mod: 'farmersdelight'})
	event.remove({output: ['#forge:rods'], mod: 'immersiveengineering'})
	//
	// ====================================== other mods recipe type ============================================================
	//
	event.remove({output: ['mekanism:bio_fuel'], type: 'mekanism:crushing'})
	event.remove({output: ['#tfc:foods/flour'], type: 'immersiveengineering:crusher'})
	event.remove({output: ['#forge:dusts'], type: 'immersiveengineering:hammer_crushing'})
	event.remove({output: ['#forge:storage_blocks'], type: 'immersiveengineering:metal_press'})
	event.remove({output: ['#forge:wires'], type: 'immersiveengineering:metal_press'})
	event.remove({output: ['#forge:plates'], type: 'tconstruct:casting_table'})
	event.remove({output: ['#forge:ingots', '#forge:nuggets', '#minecraft:coals', '#forge:gems'], type: 'minecraft:blasting'})
	//
	// ====================================== remove for type ===================================================================
	//
	event.remove({output: [
		'#forge:ingots',
		'#forge:storage_blocks',
		'#forge:nuggets',
		'#forge:dusts',
		'#forge:plates',
		'#forge:wires',
		'#forge:dyes',
		'#minecraft:coals',
		'minecraft:bone_meal',
		'minecraft:white_carpet',
		'minecraft:white_bed',
		'minecraft:leather',
		'minecraft:sugar',
		'minecraft:paper',
		'minecraft:string',
		'minecraft:snow',
		'#minecraft:wool',
		'#tfc:foods/dough',
		'#forge:deleteshapeless',
		'#tfc:colored_bed',
		'#tfc:colored_shulker_boxes',
		'#tfc:colored_concrete_powder',
		'#waystones:sharestone',
		'exnihilosequentia:copper_nugget',
		'immersiveengineering:nugget_copper',
		'mekanism:nugget_lead',
		'mekanism:nugget_steel',
		'mekanism:nugget_uranium'
	], type: 'minecraft:crafting_shapeless'})
	event.remove({output: [
		'#forge:colored_sleeping_bag',
		'#forge:colored_hammock',
		'#forge:ingots',
		'#forge:storage_blocks',
		'minecraft:leather',
		'minecraft:white_terracotta',
		'#forge:glass',
		'#tfc:colored_bed',
		'#tfc:colored_carpet',
		'#tfc:colored_terracotta',
		'#tfc:colored_stained_glass_pane'
	], type: 'minecraft:crafting_shaped'})
	//
	// ======================================= remove all recipes ===========================================
	//
	event.remove({output: [
		'htm:sawdust',
		'htm:plant_fiber',
		'htm:hammer_head',
		'htm:hammer',
		'chiselsandbits_tfc:chisel_head_stone',
		'chiselsandbits_tfc:chisel_head_iron',
		'chiselsandbits_tfc:chisel_head_gold',
		'chiselsandbits_tfc:chisel_head_diamond',
		'chiselsandbits_tfc:chisel_head_netherite',
		'bodyhygiene:pumpkin_seeds_bucket',
		'bodyhygiene:ash_bucket',
		'bodyhygiene:ash',
		'bodyhygiene:barrel_bland',
		'dynamictrees:spruce_seed',
		'dynamictrees:oak_seed',
		'dynamictrees:jungle_seed',
		'dynamictrees:dark_oak_seed',
		'dynamictrees:birch_seed',
		'dynamictrees:acacia_seed',
		'waystones:sharestone',
		'waystones:portstone',
		'waystones:return_scroll',
		'waystones:bound_scroll',
		'waystones:warp_scroll',
		'supplementaries:sconce',
		'supplementaries:sconce_soul',
		'supplementaries:copper_lantern',
		'supplementaries:brass_lantern',
		'supplementaries:crimson_lantern',
		'supplementaries:silver_lantern',
		'supplementaries:lead_lantern',
		'supplementaries:timber_frame',
		'supplementaries:timber_brace',
		'supplementaries:timber_cross_brace',
		'#supplementaries:candle_holders',
		'simple_hot_air_balloons:iron_coal_flame_thrower',
		'simple_hot_air_balloons:coal_burner_flame',
		'simple_hot_air_balloons:red_envelope_glider_helmet',
		'simple_hot_air_balloons:orange_envelope_glider_helmet',
		'simple_hot_air_balloons:yellow_envelope_glider_helmet',
		'simple_hot_air_balloons:lime_envelope_glider_helmet',
		'simple_hot_air_balloons:green_envelope_glider_helmet',
		'simple_hot_air_balloons:light_blue_envelope_glider_helmet',
		'simple_hot_air_balloons:cyan_envelope_glider_helmet',
		'simple_hot_air_balloons:blue_envelope_glider_helmet',
		'simple_hot_air_balloons:pink_envelope_glider_helmet',
		'simple_hot_air_balloons:magenta_envelope_glider_helmet',
		'simple_hot_air_balloons:purple_envelope_glider_helmet',
		'simple_hot_air_balloons:brown_envelope_glider_helmet',
		'simple_hot_air_balloons:white_envelope_glider_helmet',
		'simple_hot_air_balloons:light_gray_envelope_glider_helmet',
		'simple_hot_air_balloons:gray_envelope_glider_helmet',
		'simple_hot_air_balloons:black_envelope_glider_helmet',
		'immersiveengineering:pickaxe_steel',
		'immersiveengineering:shovel_steel',
		'immersiveengineering:axe_steel',
		'immersiveengineering:hoe_steel',
		'immersiveengineering:sword_steel',
		'immersiveengineering:armor_steel_feet',
		'immersiveengineering:armor_steel_legs',
		'immersiveengineering:armor_steel_chest',
		'immersiveengineering:armor_steel_head',
		'immersiveengineering:plate_silver',
		'immersiveengineering:plate_gold',
		'immersiveengineering:plate_steel',
		'immersiveengineering:plate_copper',
		'immersiveengineering:plate_nickel',
		'create:red_sand_paper',
		'betterpunching:flint_dagger',
		'betterpunching:flint_spade',
		'betterpunching:flint_pick',
		'betterpunching:flint_hatchet',
		'beyond_earth:steel_ingot',
		'beyond_earth:steel_nugget',
		'beyond_earth:steel_block',
		'beyond_earth:iron_plate',
		'tinyredstone:silicon',
		'tinyredstone:silicon_compound',
		'butchersdelight:roaster',
		'butchersdelightfoods:cookedbeefribs',
		'butchersdelightfoods:cooked_leg_cow',
		'butchersdelightfoods:coockedbeeftenderloin',
		'butchersdelightfoods:cookedsheepshank',
		'butchersdelightfoods:cookedsheeprack',
		'butchersdelightfoods:cooked_sheeploin',
		'butchersdelightfoods:cooked_ham',
		'butchersdelightfoods:cookedporkloin',
		'butchersdelightfoods:cookedporkribs',
		'butchersdelightfoods:cooked_goat_shank',
		'butchersdelightfoods:cooked_goat_rack',
		'butchersdelightfoods:cooked_goat_loin',
		'butchersdelightfoods:cooked_llama_leg',
		'butchersdelightfoods:cooked_llama_ribs',
		'butchersdelightfoods:cooked_llama_loin',
		'create_hc:shaft',
		//'create_hc:saw_blade',
		'create_hc:drill_head',
		'create_hc:press_head',
		'create_sa:copper_helmet',
		'create_sa:copper_chestplate',
		'create_sa:copper_leggings',
		'create_sa:copper_boots',
		'create_sa:copper_pickaxe',
		'create_sa:copper_axe',
		'create_sa:copper_sword',
		'create_sa:copper_shovel',
		'create_sa:copper_hoe',
		'create_sa:zinc_pickaxe',
		'create_sa:zinc_axe',
		'create_sa:zinc_sword',
		'create_sa:zinc_shovel',
		'create_sa:zinc_hoe',
		'create:zinc_ingot',
		'create:bar_of_chocolate',
		'create_sa:brass_pickaxe',
		'create_sa:brass_axe',
		'create_sa:brass_sword',
		'create_sa:brass_shovel',
		'create_sa:brass_hoe',
		'createsifter:andesite_mesh',
		'createsifter:zinc_mesh',
		'exnihilosequentia:cooked_silkworm',
		'exnihilosequentia:beehive_frame',
		'exnihilosequentia:raw_lead',
		'exnihilosequentia:andesite_pebble',
		'exnihilosequentia:basalt_pebble',
		'exnihilosequentia:blackstone_pebble',
		'exnihilosequentia:diorite_pebble',
		'exnihilosequentia:granite_pebble',
		'exnihilosequentia:stone_pebble',
		'exnihilosequentia:acacia_sieve',
		'exnihilosequentia:oak_sieve',
		'exnihilosequentia:dark_oak_sieve',
		'exnihilosequentia:jungle_sieve',
		'exnihilosequentia:spruce_sieve',
		'exnihilosequentia:crimson_sieve',
		'exnihilosequentia:warped_sieve',
		'exnihilosequentia:diamond_hammer',
		'exnihilosequentia:golden_hammer',
		'exnihilosequentia:wooden_hammer',
		'exnihilosequentia:andesite_crook',
		'exnihilosequentia:bone_crook',
		'exnihilosequentia:diamond_crook',
		'exnihilosequentia:diorite_crook',
		'exnihilosequentia:gold_crook',
		'exnihilosequentia:granite_crook',
		'exnihilosequentia:stone_crook',
		'exnihilosequentia:acacia_crucible',
		'exnihilosequentia:birch_crucible',
		'exnihilosequentia:dark_oak_crucible',
		'exnihilosequentia:jungle_crucible',
		'exnihilosequentia:spruce_crucible',
		'exnihilosequentia:crimson_crucible',
		'exnihilosequentia:warped_crucible',
		'exnihilosequentia:acacia_barrel',
		'exnihilosequentia:birch_barrel',
		'exnihilosequentia:dark_oak_barrel',
		'exnihilosequentia:jungle_barrel',
		'exnihilosequentia:spruce_barrel',
		'exnihilosequentia:crimson_barrel',
		'exnihilosequentia:warped_barrel',
		'exnihilosequentia:oak_barrel',
		'immersiveengineering:lantern',
		'minecraft:shield',
		'minecraft:candle',
		'minecraft:beehive',
		'minecraft:lantern',
		'minecraft:soul_lantern',
		'minecraft:torch',
		'minecraft:kelp',
		'minecraft:barrel',
		//'minecraft:oak_planks',
		//'minecraft:spruce_planks',
		//'minecraft:birch_planks',
		//'minecraft:jungle_planks',
		//'minecraft:acacia_planks',
		//'minecraft:dark_oak_planks',
		//'minecraft:oak_slab',
		//'minecraft:spruce_slab',
		//'minecraft:birch_slab',
		//'minecraft:jungle_slab',
		//'minecraft:acacia_slab',
		//'minecraft:dark_oak_slab',
		'#minecraft:boats',
		'minecraft:mushroom_stew',
		'minecraft:cocoa_beans',
		'minecraft:cooked_rabbit',
		'minecraft:cooked_salmon',
		'minecraft:cooked_cod',
		'minecraft:stonecutter',
		'minecraft:dried_kelp',
		'minecraft:bread',
		'minecraft:cake',
		'minecraft:smoker',
		'minecraft:fishing_rod',
		'minecraft:gold_ingot',
		'minecraft:copper_ingot',
		'mekanism:ingot_bronze',
		'mekanism:ingot_steel',
		'mekanism:ingot_tin',
		'mekanism:ingot_lead',
		'mekanism:ingot_uranium',
		'mekanism:precision_sawmill',
		'mekanism:cardboard_box',
		'mekanism:nutritional_liquifier',
		//'mekanism:module_nutritional_injection_unit',
		'sewingkit:wood_sewing_needle',
		'sewingkit:stone_sewing_needle',
		'sewingkit:gold_sewing_needle',
		'sewingkit:diamond_sewing_needle',
		//'tfc:food/barley_dough',
		//'tfc:food/maize_dough',
		//'tfc:food/oat_dough',
		//'tfc:food/rice_dough',
		//'tfc:food/rye_dough',
		//'tfc:food/wheat_dough',
		'tconstruct:pig_iron_ingot',
		'tconstruct:earth_slime_sling',
		'tconstruct:sky_slime_sling',
		'tconstruct:ender_slime_sling',
		'tconstruct:ichor_slime_sling',
		'twilightforest:uncrafting_table',
		'waterstrainer:strainer_fisherman',
		//'untamedwilds:food_turtle_soup',
		//'untamedwilds:food_hemlock_stew',
		'untamedwilds:food_pemmican',
		'geolosys:tin_ingot',
		'geolosys:silver_ingot',
		'geolosys:lead_ingot',
		'geolosys:aluminum_ingot',
		'geolosys:nickel_ingot',
		'geolosys:zinc_ingot',
		'geolosys:copper_nugget',
		'geolosys:tin_nugget',
		'geolosys:silver_nugget',
		'geolosys:lead_nugget',
		'geolosys:aluminum_nugget',
		'geolosys:nickel_nugget',
		'geolosys:zinc_nugget',
		'geolosys:lignite_coal',
		'geolosys:bituminous_coal',
		'geolosys:anthracite_coal',
		'geolosys:lignite_coal_coke',
		'geolosys:bituminous_coal_coke',
		'geolosys:prospectors_pick',
		'railways:track_twilightforest_canopy',
		'railways:track_twilightforest_darkwood',
		'railways:track_twilightforest_mangrove',
		'railways:track_twilightforest_minewood',
		'railways:track_twilightforest_sortingwood',
		'railways:track_twilightforest_timewood',
		'railways:track_twilightforest_transwood',
		'railways:track_twilightforest_twilight_oak'
	]})
	//
	// ========================================= remove input =============================================================
	//
	event.remove({input: [
		'minecraft:mutton',
		'minecraft:porkchop',
		'minecraft:beef',
		'minecraft:chicken'
	], type: 'minecraft:crafting_shaped'})
})