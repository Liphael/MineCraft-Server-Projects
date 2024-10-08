// priority: 10

// ======= BLOCKS
onEvent('tags.blocks', event => {
    // by air!
    event.add('chiselsandbits:chiselable/blocked', [
        '#forge:ores',
        '#minecraft:water',
        '#minecraft:lava',
        '#tfc:rock/raw'
    ])
    //
	
	event.add('tfc:can_be_snow_piled', [
		//'geolosys:lignite_ore_sample',
	])
	event.add('tfc:can_trigger_collapse', [
		'exnihilosequentia:infesting_leaves',
		'exnihilosequentia:infested_leaves'
	])
	event.add('tfc:can_start_collapse', [
		'exnihilosequentia:infesting_leaves',
		'exnihilosequentia:infested_leaves'
	])
	event.add('tfc:can_collapse', [
		'exnihilosequentia:infesting_leaves',
		'exnihilosequentia:infested_leaves'
	])
	//event.remove('minecraft:leaves', [
	//	'#dynamictrees:leaves',
	//	'tfc:wood/leaves/acacia',
	//	'tfc:wood/leaves/ash',
	//	'tfc:wood/leaves/aspen',
	//	'tfc:wood/leaves/birch',
	//	'tfc:wood/leaves/blackwood',
	//	'tfc:wood/leaves/chestnut',
	//	'tfc:wood/leaves/douglas_fir',
	//	'tfc:wood/leaves/hickory',
	//	'tfc:wood/leaves/kapok',
	//	'tfc:wood/leaves/maple',
	//	'tfc:wood/leaves/palm',
	//	'tfc:wood/leaves/pine',
	//	'tfc:wood/leaves/rosewood',
	//	'tfc:wood/leaves/sequoia',
	//	'tfc:wood/leaves/spruce',
	//	'tfc:wood/leaves/sycamore',
	//	'tfc:wood/leaves/white_cedar'
	//])
	//event.add('forge:noinfused', [
	//	'dttfc:acacia_leaves',
	//	'dttfc:ash_leaves',
	//	'dttfc:aspen_leaves',
	//	'dttfc:birch_leaves',
	//	'dttfc:blackwood_leaves',
	//	'dttfc:chestnut_leaves',
	//	'dttfc:douglas_fir_leaves',
	//	'dttfc:hickory_leaves',
	//	'dttfc:kapok_leaves',
	//	'dttfc:maple_leaves',
	//	'dttfc:palm_leaves',
	//	'dttfc:pine_leaves',
	//	'dttfc:rosewood_leaves',
	//	'dttfc:sequoia_leaves',
	//	'dttfc:spruce_leaves',
	//	'dttfc:sycamore_leaves',
	//	'dttfc:white_cedar_leaves'
	//])
	event.add('minecraft:mineable/axe', [
		'sewingkit:sewing_station',
		'sewingkit:storing_sewing_station'
	])
	event.add('twilightforest:portal/edge', [
		'#tfc:dirt',
		'#tfc:grass',
		'#tfc:clay_grass',
		'#tfc:farmland'
	])
	event.add('forge:immovable', [
		'domum_ornamentum:vanilla_doors_compat',
		'domum_ornamentum:fancy_door',
		'butchersdelight:rackhoglin',
		'butchersdelight:rackgoat',
		'butchersdelight:racksheep',
		'butchersdelight:rackcow',
		'butchersdelight:rackhoglin',
		'butchersdelight:rackhoglin',
		'exnihilosequentia:stone_barrel',
		'tfc:charcoal_forge',
		'#firmalife:cheese_wheels',
		'firmalife:mixing_bowl',
		'firmalife:iron_composter',
		'firmalife:drying_mat',
		'firmalife:solar_drier',
		'tfc:drying_bricks/silt',
		'tfc:drying_bricks/silty_loam',
		'tfc:drying_bricks/sandy_loam',
		'tfc:drying_bricks/loam',
		'tfc:ingot_pile',
		'tfc:firepit',
		'tfc:pot',
		'tfc:composter',
		'tfc:grill',
		'tfc:bloomery',
		'tfc:bloom',
		'tfc:molten',
		'tfcchannelcasting:mold_table',
		'tfchomestead:full_jar',
		'tfchomestead:jar',
		'untamedwilds:block_burrow',
		'#tfc:wild_fruits',
		'#tfc:anvils',
		'#tfc:sluices'
	])
	event.add('tfc:tornado_grab', [
		'#tfc:plants',
		'tfc:nest_box',
		'create:shaft',
		'create:cogwheel',
		'create:large_cogwheel',
		'create:depot',
		'create:fluid_pipe',
		'create:chute',
		'create:sail_frame',
		'create:white_sail',
		'exnihilosequentia:infesting_leaves',
		'exnihilosequentia:infested_leaves',
		'firmaciv:thatch_roofing',
		'firmalife:large_planter',
		'firmalife:quad_planter',
		'firmalife:bonsai_planter',
		'firmalife:hanging_planter',
		'firmalife:trellis_planter',
		'firmalife:beehive',
		'firmalife:treated_wood_greenhouse_door',
		'firmalife:treated_wood_greenhouse_roof_top',
		'firmalife:treated_wood_greenhouse_roof',
		'firmalife:weathered_treated_wood_greenhouse_door',
		'firmalife:weathered_treated_wood_greenhouse_roof_top',
		'firmalife:weathered_treated_wood_greenhouse_roof'
	])
})
// ===== FLUIDS
onEvent('tags.fluids', event => {
    // by air!
    event.add('forge:molten_unknown', ['tfc:metal/unknown'])
    event.add('forge:molten_weak_steel', ['tfc:metal/weak_steel'])
    event.add('forge:molten_weak_red_steel', ['tfc:metal/weak_red_steel'])
    event.add('forge:molten_weak_blue_steel', ['tfc:metal/weak_blue_steel'])
    event.add('forge:molten_cast_iron', ['tfc:metal/cast_iron'])
    event.add('forge:molten_wrought_iron', ['tfc:metal/wrought_iron'])
    event.add('forge:molten_iron_any', ['tfc:metal/cast_iron','tconstruct:molten_iron'])
    event.add('forge:molten_bismuth', ['tfc:metal/bismuth'])
    event.add('forge:molten_bismuth_bronze', ['tfc:metal/bismuth_bronze'])
    event.add('forge:molten_black_bronze', ['tfc:metal/black_bronze'])
    event.add('forge:molten_sterling_silver', ['tfc:metal/sterling_silver'])
    event.add('forge:molten_black_steel', ['tfc:metal/black_steel'])
    event.add('forge:molten_red_steel', ['tfc:metal/red_steel'])
    event.add('forge:molten_blue_steel', ['tfc:metal/blue_steel'])
    //

	event.add('forge:molten_iron_quartz', ['kubejs:molten_iron_quartz'])
	event.add('forge:molten_andesite_alloy', ['kubejs:andesite_alloy'])
	event.add('forge:molten_lead', ['tfc_ie_addon:metal/lead'])
	event.add('forge:molten_steel', ['tfc:metal/steel'])
	event.add('forge:molten_copper', ['tfc:metal/copper'])
	event.add('forge:molten_gold', ['tfc:metal/gold'])
	event.add('forge:molten_silver', ['tfc:metal/silver'])
	event.add('forge:molten_brass', ['tfc:metal/brass'])
	event.add('forge:molten_bronze', ['tfc:metal/bronze'])
	event.add('forge:molten_nickel', ['tfc:metal/nickel'])
	event.add('forge:molten_tin', ['tfc:metal/tin'])
	event.add('forge:molten_zinc', ['tfc:metal/zinc'])
	event.add('forge:molten_uranium', ['tfc_ie_addon:metal/uranium'])
	event.add('forge:molten_constantan', ['tfc_ie_addon:metal/constantan'])
	event.add('forge:molten_electrum', ['tfc_ie_addon:metal/electrum'])
	event.add('forge:molten_aluminum', ['tfc_ie_addon:metal/aluminum'])
	event.add('forge:active_redstone', ['kubejs:active_redstone'])
	event.add('tfc:andesite_alloy', ['kubejs:andesite_alloy'])
	event.add('tfc:andesite_stone', ['kubejs:andesite_stone'])
	event.add('tfc:mixable', ['kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water','immersiveengineering:creosote'])
	event.add('minecraft:waters', ['minecraft:water', 'kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water', 'tfc:spring_water'])
	event.add('minecraft:water', ['kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water'])
	event.add('tfc:drinkables', ['kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water', 'minecraft:milk','firmalife:yak_milk','firmalife:goat_milk'])
	event.add('tfc:infinite_water', ['kubejs:purified_water'])
	event.add('tfc:usable_in_ingot_mold', ['kubejs:andesite_alloy', 'tconstruct:seared_stone', 'kubejs:andesite_stone', 'tconstruct:molten_glass', 'kubejs:molten_iron_quartz'])
	event.add('tfc:usable_in_barrel', ['firmalife:sugar_water', 'tconstruct:honey', 'kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water', 'kubejs:seed_oil_water', 'create:tea', 'tfc:spring_water', 'createaddition:seed_oil'])
	event.add('tfc:usable_in_blue_steel_bucket', ['firmalife:sugar_water', 'tconstruct:honey', 'immersiveengineering:creosote', 'kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water', 'kubejs:seed_oil_water', 'kubejs:active_redstone', 'kubejs:andesite_stone', 'kubejs:andesite_alloy', 'kubejs:molten_iron_quartz', 'createaddition:seed_oil'])
	event.add('tfc:usable_in_red_steel_bucket', ['firmalife:sugar_water', 'tconstruct:honey', 'immersiveengineering:creosote', 'kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water', 'kubejs:seed_oil_water',  'kubejs:active_redstone', 'kubejs:andesite_stone', 'kubejs:andesite_alloy', 'kubejs:molten_iron_quartz', 'createaddition:seed_oil'])
	event.add('tfc:usable_in_wooden_bucket', ['firmalife:sugar_water', 'tconstruct:honey', 'immersiveengineering:creosote', 'kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water', 'kubejs:seed_oil_water', 'create:tea', 'tfc:spring_water', 'createaddition:seed_oil'])
	event.add('tfc:usable_in_pot', ['firmalife:sugar_water', 'tconstruct:honey', 'immersiveengineering:creosote', 'kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water', 'kubejs:seed_oil_water', 'create:tea'])
	event.add('tfc:usable_in_jug', ['firmalife:sugar_water', 'tconstruct:honey', 'immersiveengineering:creosote', 'kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water', 'kubejs:seed_oil_water', 'tfc:tallow', 'create:tea'])
	event.add('firmalife:usable_in_mixing_bowl', ['tconstruct:honey', 'immersiveengineering:creosote', 'kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water', 'kubejs:seed_oil_water', 'create:tea', 'createaddition:seed_oil'])
	event.add('firmalife:usable_in_vat', ['tconstruct:honey', 'immersiveengineering:creosote', 'kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water', 'kubejs:seed_oil_water'])
	event.add('tfc:brine', ['mekanism:brine'])
	event.add('forge:brine', ['tfc:brine'])
	event.remove('forge:crude_oil', ['pneumaticcraft:oil'])
	event.remove('forge:diesel', ['pneumaticcraft:diesel'])
	event.remove('forge:biodiesel', ['pneumaticcraft:biodiesel'])
	event.remove('forge:kerosene', ['pneumaticcraft:kerosene'])
	event.remove('forge:gasoline', ['pneumaticcraft:gasoline'])
	event.remove('forge:lubricant', ['pneumaticcraft:lubricant'])
	event.remove('forge:ethanol', ['pneumaticcraft:ethanol'])
	event.remove('forge:plantoil', ['pneumaticcraft:vegetable_oil', 'immersiveengineering:plantoil'])
})
// ========== ENTITY TYPE
// ========= ITEMS
onEvent('tags.items', event => {
    // by air!
    event.remove('minecraft:carpets', ['farmersdelight:half_tatami_mat','farmersdelight:full_tatami_mat'])
    event.add('tfc:shears', ['htm:flint_shears'])
    event.remove('forge:ores/clean_dusts', 'tfc:powder/graphite')
    event.add('createoreexcavation:high_tier_drills', ['createoreexcavation:diamond_drill','createoreexcavation:netherite_drill'])

    event.add('forge:sheetmetals_colored',[
        'immersiveengineering:sheetmetal_colored_white',
        'immersiveengineering:sheetmetal_colored_orange',
        'immersiveengineering:sheetmetal_colored_magenta',
        'immersiveengineering:sheetmetal_colored_light_blue',
        'immersiveengineering:sheetmetal_colored_yellow',
        'immersiveengineering:sheetmetal_colored_lime',
        'immersiveengineering:sheetmetal_colored_pink',
        'immersiveengineering:sheetmetal_colored_gray',
        'immersiveengineering:sheetmetal_colored_light_gray',
        'immersiveengineering:sheetmetal_colored_cyan',
        'immersiveengineering:sheetmetal_colored_purple',
        'immersiveengineering:sheetmetal_colored_blue',
        'immersiveengineering:sheetmetal_colored_brown',
        'immersiveengineering:sheetmetal_colored_green',
        'immersiveengineering:sheetmetal_colored_red',
        'immersiveengineering:sheetmetal_colored_black'])
    event.add('forge:sheetmetal_slabs_colored',[
        'immersiveengineering:slab_sheetmetal_colored_white',
        'immersiveengineering:slab_sheetmetal_colored_orange',
        'immersiveengineering:slab_sheetmetal_colored_magenta',
        'immersiveengineering:slab_sheetmetal_colored_light_blue',
        'immersiveengineering:slab_sheetmetal_colored_yellow',
        'immersiveengineering:slab_sheetmetal_colored_lime',
        'immersiveengineering:slab_sheetmetal_colored_pink',
        'immersiveengineering:slab_sheetmetal_colored_gray',
        'immersiveengineering:slab_sheetmetal_colored_light_gray',
        'immersiveengineering:slab_sheetmetal_colored_cyan',
        'immersiveengineering:slab_sheetmetal_colored_purple',
        'immersiveengineering:slab_sheetmetal_colored_blue',
        'immersiveengineering:slab_sheetmetal_colored_brown',
        'immersiveengineering:slab_sheetmetal_colored_green',
        'immersiveengineering:slab_sheetmetal_colored_red',
        'immersiveengineering:slab_sheetmetal_colored_black'])

    event.add('immersiveengineering:press_molds',[
        'immersiveengineering:mold_plate',
        'immersiveengineering:mold_gear',
        'immersiveengineering:mold_rod',
        'immersiveengineering:mold_bullet_casing',
      //'immersiveengineering:mold_wire',
        'immersiveengineering:mold_packing_4',
      //'immersiveengineering:mold_packing_9',
        'immersiveengineering:mold_unpacking'])

    event.add('forge:ingots/iron', ['tfc:metal/ingot/wrought_iron'])
    event.add('forge:ores/dirty_piles',[
        'tfcorewashing:dirty_pile_bauxite',
        'tfcorewashing:dirty_pile_bismuthinite',
        'tfcorewashing:dirty_pile_cassiterite',
        'tfcorewashing:dirty_pile_chromite',
        'tfcorewashing:dirty_pile_cinnabar',
        'tfcorewashing:dirty_pile_copper',
        'tfcorewashing:dirty_pile_cryolite',
        'tfcorewashing:dirty_pile_galena',
        'tfcorewashing:dirty_pile_garnierite',
        'tfcorewashing:dirty_pile_gold',
        'tfcorewashing:dirty_pile_graphite',
        'tfcorewashing:dirty_pile_hematite',
        'tfcorewashing:dirty_pile_limonite',
        'tfcorewashing:dirty_pile_magnetite',
        'tfcorewashing:dirty_pile_malachite',
        'tfcorewashing:dirty_pile_silver',
        'tfcorewashing:dirty_pile_sphalerite',
        'tfcorewashing:dirty_pile_sulfur',
        'tfcorewashing:dirty_pile_tetrahedrite',
        'tfcorewashing:dirty_pile_uraninite'])
    event.add('forge:ores/pellets',[
        'tfcorewashing:pellet_bauxite',
        'tfcorewashing:pellet_bismuthinite',
        'tfcorewashing:pellet_cassiterite',
        'tfcorewashing:pellet_chromium',
        'tfcorewashing:pellet_copper',
        'tfcorewashing:pellet_galena',
        'tfcorewashing:pellet_garnierite',
        'tfcorewashing:pellet_gold',
        'tfcorewashing:pellet_hematite',
        'tfcorewashing:pellet_limonite',
        'tfcorewashing:pellet_magnetite',
        'tfcorewashing:pellet_malachite',
        'tfcorewashing:pellet_silver',
        'tfcorewashing:pellet_sphalerite',
        'tfcorewashing:pellet_tetrahedrite',
        'tfcorewashing:pellet_uraninite'])
    event.add('forge:ores/briquettes',[
        'tfcorewashing:briquet_bauxite',
        'tfcorewashing:briquet_bismuthinite',
        'tfcorewashing:briquet_cassiterite',
        'tfcorewashing:briquet_chromium',
        'tfcorewashing:briquet_copper',
        'tfcorewashing:briquet_galena',
        'tfcorewashing:briquet_garnierite',
        'tfcorewashing:briquet_gold',
        'tfcorewashing:briquet_hematite',
        'tfcorewashing:briquet_limonite',
        'tfcorewashing:briquet_magnetite',
        'tfcorewashing:briquet_malachite',
        'tfcorewashing:briquet_silver',
        'tfcorewashing:briquet_sphalerite',
        'tfcorewashing:briquet_tetrahedrite',
        'tfcorewashing:briquet_uraninite'])
    event.add('forge:sand_piles',[
        'tfcorewashing:pile_black_sand',
        'tfcorewashing:pile_brown_sand',
        'tfcorewashing:pile_green_sand',
        'tfcorewashing:pile_pink_sand',
        'tfcorewashing:pile_red_sand',
        'tfcorewashing:pile_white_sand',
        'tfcorewashing:pile_yellow_sand'])
    //

	//event.remove('forge:tools/saws', '#forge:tools/axes')
	//event.add('forge:saw_blade', 'immersiveengineering:sawblade')
	event.add('forge:press_head', 'kubejs:press_head')
	event.add('tfc:compost_browns_low', ['mekanism:bio_fuel'])
	event.add('tfc:compost_greens_low', ['kubejs:seed_biomass'])
	event.add('tfc:compost_greens', ['createaddition:biomass'])
	event.add('forge:barrels', '#tfcbarrels:barrels')
	event.add('forge:barrels/wooden', '#tfcbarrels:barrels')
	event.add('twilightforest:portal/activator', 'kubejs:magic_crystal')
	event.remove('twilightforest:portal/activator', ['#forge:gems/diamond'])
	event.add('forge:tools/knives', '#tfc:knives')
	event.add('forge:tools/hammers', '#tfc:hammers')
	event.add('forge:tools/saws', '#tfc:saws')
	event.add('forge:tools/axes', '#tfc:axes')
	event.add('forge:axes', '#tfc:axes')
	event.add('tfc:dog_food', 'farmersdelight:dog_food')
	event.add('tfc:horse_food', 'farmersdelight:horse_feed')
	event.add('tfc:mule_food', 'farmersdelight:horse_feed')
	event.add('tfc:donkey_food', 'farmersdelight:horse_feed')
	event.add('tfc:sandwich_bread', 'pneumaticcraft:sourdough_bread')
	event.add('forge:sugar', 'minecraft:sugar')
	event.add('forge:food/dried_kelp', 'tfc:food/dried_kelp')
	event.add('forge:food/diary/curd', ['firmalife:food/yak_curd', 'firmalife:food/goat_curd', 'firmalife:food/milk_curd'])
	event.add('forge:flour/wheat', '#tfc:foods/flour')
	event.add('forge:treated_wood', 'firmalife:treated_wood')
	event.add('forge:cogwheel_small', ['steampowered:steel_cogwheel','steampowered:cast_iron_cogwheel','steampowered:bronze_cogwheel'])
	event.add('forge:cogwheel_large', ['steampowered:steel_large_cogwheel','steampowered:cast_iron_large_cogwheel','steampowered:bronze_large_cogwheel'])
	event.add('forge:dusts/salt', 'tfc:powder/salt')
	event.add('forge:dusts/saltpeter', 'tfc:powder/saltpeter')
	event.add('forge:dusts/graphite', 'tfc:powder/graphite')
	event.add('forge:dusts/amethyst', 'kubejs:clean_amethyst_powder')
	event.add('forge:honey_jar', ['firmalife:honey_jar','minecraft:honey_bottle'])
	event.add('forge:raw_honey', ['firmalife:raw_honey','minecraft:honeycomb'])
	event.add('forge:thatch', [
		'firmaciv:thatch_roofing',
		'tfc:thatch',
		'mcwroofs:thatch_roof',
		'mcwroofs:thatch_top_roof',
		'mcwroofs:thatch_lower_roof',
		'mcwroofs:thatch_steep_roof',
		'mcwroofs:thatch_upper_lower_roof',
		'mcwroofs:thatch_upper_steep_roof',
		'mcw_tfc_aio:roofs/thatch_roofs/thatch_roof',
		'mcw_tfc_aio:roofs/thatch_roofs/thatch_top_roof',
		'mcw_tfc_aio:roofs/thatch_roofs/thatch_lower_roof',
		'mcw_tfc_aio:roofs/thatch_roofs/thatch_steep_roof',
		'mcw_tfc_aio:roofs/thatch_roofs/thatch_upper_lower_roof',
		'mcw_tfc_aio:roofs/thatch_roofs/thatch_upper_steep_roof',
		'minecraft:hay_block'
	])
	//----------------
	event.add('tfc:huge_very_heavy', [
		'simple_hot_air_balloons:red_hot_air_balloon_item',
		'simple_hot_air_balloons:orange_hot_air_balloon_item',
		'simple_hot_air_balloons:yellow_hot_air_balloon_item',
		'simple_hot_air_balloons:lime_hot_air_balloon_item',
		'simple_hot_air_balloons:green_hot_air_balloon_item',
		'simple_hot_air_balloons:light_blue_hot_air_balloon_item',
		'simple_hot_air_balloons:cyan_hot_air_balloon_item',
		'simple_hot_air_balloons:blue_hot_air_balloon_item',
		'simple_hot_air_balloons:pink_hot_air_balloon_item',
		'simple_hot_air_balloons:magenta_hot_air_balloon_item',
		'simple_hot_air_balloons:purple_hot_air_balloon_item',
		'simple_hot_air_balloons:brown_hot_air_balloon_item',
		'simple_hot_air_balloons:white_hot_air_balloon_item',
		'simple_hot_air_balloons:light_gray_hot_air_balloon_item',
		'simple_hot_air_balloons:gray_hot_air_balloon_item',
		'simple_hot_air_balloons:black_hot_air_balloon_item',
		'butchersdelight:dead_cow',
		'butchersdelight:deadpig',
		'butchersdelight:deadsheep',
		'butchersdelight:deadgoat',
    	'butchersdelight:deadhoglin',
    	'butchersdelight:deadllama',
    	'butchersdelight:deadstrider',
		'beyond_earth:rocket_t1',
		'beyond_earth:rocket_t2',
		'beyond_earth:rocket_t3',
		'beyond_earth:rocket_t4',
		'beyond_earth:rover',
		'beyond_earth:nasa_workbench',
		'mekanism:basic_bin',
		'mekanism:basic_fluid_tank',
		'mekanism:basic_chemical_tank',
		'mekanism:advanced_bin',
		'mekanism:advanced_fluid_tank',
		'mekanism:advanced_chemical_tank',
		'mekanism:elite_bin',
		'mekanism:elite_fluid_tank',
		'mekanism:elite_chemical_tank',
		'mekanism:ultimate_bin',
		'mekanism:ultimate_fluid_tank',
		'mekanism:ultimate_chemical_tank',
		'mob_grinding_utils:tank',
		'mob_grinding_utils:tank_sink',
		'mob_grinding_utils:jumbo_tank',
		'mob_grinding_utils:xpsolidifier',
		'pneumaticcraft:etching_tank',
		'pneumaticcraft:small_tank',
		'pneumaticcraft:medium_tank',
		'pneumaticcraft:large_tank',
		'pneumaticcraft:huge_tank',
		'tconstruct:seared_fuel_tank',
		'tconstruct:seared_fuel_gauge',
		'tconstruct:seared_ingot_tank',
		'tconstruct:seared_ingot_gauge',
		'tconstruct:scorched_fuel_tank',
		'tconstruct:scorched_fuel_gauge',
		'tconstruct:scorched_ingot_tank',
		'tconstruct:scorched_ingot_gauge',
		'create:water_wheel',
		'create:large_water_wheel',
		'create:crushing_wheel',
		'create:mechanical_press',
		'create:mechanical_mixer',
		'create:mechanical_drill',
		'create:mechanical_saw',
		'create:mechanical_harvester',
		'create:mechanical_plough',
		'create:mechanical_arm',
		'create:deployer',
		'create:flywheel',
		'securitycraft:cage_trap',
		'untamedwilds:trap_cage',
		'supplementaries:cage',
		'mekanismgenerators:advanced_solar_generator',
		'mekanismgenerators:wind_generator',
		'immersive_aircraft:hull',
		'immersive_aircraft:engine',
		'immersive_aircraft:sail',
		'immersive_aircraft:propeller',
		'immersive_aircraft:boiler',
		'immersive_aircraft:airship',
		'immersive_aircraft:biplane',
		'immersive_aircraft:gyrodyne',
		'immersive_aircraft:quadrocopter',
		'immersive_aircraft:enhanced_propeller',
		'immersive_aircraft:eco_engine',
		'immersive_aircraft:nether_engine',
		'immersive_aircraft:steel_boiler',
		'immersiveengineering:windmill',
		'immersiveengineering:watermill',
		'immersiveengineering:fluid_pump',
		'immersiveengineering:blastfurnace_preheater',
		'immersiveengineering:sample_drill',
		'immersiveengineering:cloche',
		'immersiveengineering:steel_post',
		'immersiveengineering:alu_post',
		'immersiveengineering:transformer',
		'immersiveengineering:transformer_hv',
		'immersiveengineering:treated_post',
		'immersiveengineering:crate',
		'immersiveengineering:reinforced_crate',
		'immersiveengineering:wooden_barrel',
		'immersiveengineering:metal_barrel',
		'mekanism:personal_barrel',
		'mekanism:personal_chest',
		'immersivepetroleum:speedboat',
		'kubejs:stack_treated_wood',
		'kubejs:big_stack_treated_wood',
		'kubejs:canoe',
		'kubejs:press_head',
		'kubejs:hardened_press_head',
		'#functionalstorage:drawer',
		'#tfc:barrels',
		'exnihilosequentia:stone_barrel',
		'functionalstorage:ender_drawer',
		'functionalstorage:compacting_drawer',
		'functionalstorage:simple_compacting_drawer',
		'functionalstorage:compacting_framed_drawer',
		'functionalstorage:fluid_1',
		'functionalstorage:fluid_2',
		'functionalstorage:fluid_4',
	]),
	event.add('tfc:very_large_heavy', [
		'butchersdelight:deadchiken',
		'butchersdelight:deadrabbitbrown',
		'beyond_earth:solar_panel',
		'beyond_earth:coal_generator',
		'beyond_earth:oxygen_loader',
		'beyond_earth:oxygen_bubble_distributor',
		'create:cart_assembler',
		'create:basin',
		'create:empty_blaze_burner',
		'create:blaze_burner',
		'create:fluid_tank',
		'create:hose_pulley',
		'create:item_drain',
		'create:spout',
		'create:portable_fluid_interface',
		'create:portable_storage_interface',
		'create:gantry_carriage',
		'create:windmill_bearing',
		'create:mechanical_bearing',
		'create:rotation_speed_controller',
		'create:andesite_funnel',
		'create:brass_funnel',
		'create:brass_tunnel',
		'create:andesite_tunnel',
		'create:display_board',
		'createsifter:sifter',
		'minecraft:minecart',
		'minecraft:chest_minecart',
		'minecraft:furnace_minecart',
		'minecraft:tnt_minecart',
		'minecraft:hopper_minecart',
		'immersiveengineering:minecart_woodencrate',
		'immersiveengineering:minecart_woodenbarrel',
		'immersiveengineering:minecart_metalbarrel',
		'immersiveengineering:minecart_reinforcedcrate',
		'supplementaries:dispenser_minecart',
		'railways:benchcart',
		'railways:jukeboxcart'
	]),
	event.add('firmalife:foods/heatable', [
		'kubejs:shark_meat',
		'farmersdelight:minced_beef',
		'farmersdelight:chicken_cuts',
		'farmersdelight:mutton_chops',
    	'farmersdelight:ham',
    	'farmersdelight:bacon',
		'farmersdelight:cod_slice',
		'farmersdelight:salmon_slice',
		'minecraft:porkchop',
		'minecraft:mutton',
		'minecraft:chicken',
		'minecraft:beef',
		'tfc:food/potato',
		//'twilightdelight:raw_insect',
		//'twilightdelight:raw_venison_rib',
		//'twilightdelight:raw_meef_slice',
		//'twilightdelight:hydra_piece',
		'twilightforest:raw_venison',
		'twilightforest:raw_meef',
		'twilightforest:hydra_chop',
		'untamedwilds:food_bear_raw',
		'untamedwilds:food_turtle_raw',
		'untamedwilds:food_pachyderm_raw'
	]),
	event.add('firmalife:usable_in_stovetop_soup', [
		'kubejs:shark_meat',
		//'twilightdelight:raw_insect',
		//'twilightdelight:raw_venison_rib',
		//'twilightdelight:raw_meef_slice',
		//'twilightdelight:hydra_piece',
		'twilightforest:raw_venison',
		'twilightforest:raw_meef',
		'twilightforest:hydra_chop',
		'untamedwilds:food_bear_raw',
		'untamedwilds:food_turtle_raw',
		'untamedwilds:food_pachyderm_raw'
	]),
	event.add('tfc:foods', [
		'kubejs:shark_meat',
		'kubejs:shark_cooked_meat',
		'create:sweet_roll',
		'create:chocolate_glazed_berries',
		'create:honeyed_apple',
		'createaddition:chocolate_cake',
		'createaddition:honey_cake',
		'createaddition:cake_base',
		'createaddition:cake_base_baked',
		'farmersrespite:coffee_berries',
		'farmersrespite:green_tea_cookie',
		'farmersrespite:nether_wart_sourdough',
		'farmersrespite:black_cod',
		'farmersrespite:tea_curry',
		'farmersrespite:blazing_chili',
		'farmersrespite:coffee_cake',
		'farmersrespite:coffee_cake_slice',
		'farmersrespite:rose_hip_pie',
		'farmersrespite:rose_hip_pie_slice',
		'coffee_delight:coffee_pie_side',
		'coffee_delight:coffee_pie',
		'coffee_delight:quiche_side',
		//'twilightdelight:glowstew',
		//'twilightdelight:raw_venison_rib',
		//'twilightdelight:cooked_venison_rib',
		//'twilightdelight:hydra_piece',
		//'twilightdelight:raw_meef_slice',
		//'twilightdelight:cooked_meef_slice',
		//'twilightdelight:fiery_snakes',
		//'twilightdelight:raw_insect',
		//'twilightdelight:cooked_insect',
		//'twilightdelight:fried_insect',
		//'twilightdelight:torchberry_cookie',
		//'twilightdelight:glow_venison_rib_with_pasta',
		//'twilightdelight:thousand_plant_stew',
		//'twilightdelight:aurora_ice_cream',
		//'twilightdelight:grilled_ghast',
		//'twilightdelight:chocolate_wafer',
		//'twilightdelight:lily_chicken_block',
		//'twilightdelight:lily_chicken',
		//'twilightdelight:fiery_snakes_block',
		'twilightforest:raw_venison',
		'twilightforest:cooked_venison',
		'twilightforest:hydra_chop',
		'twilightforest:raw_meef',
		'twilightforest:cooked_meef',
		'twilightforest:meef_stroganoff',
		'twilightforest:maze_wafer',
		'twilightforest:experiment_115',
		'pneumaticcraft:sourdough_bread',
		'pneumaticcraft:chips',
		'pneumaticcraft:cod_n_chips',
		'pneumaticcraft:salmon_tempura',
		'butchersdelightfoods:beefribs',
		'butchersdelightfoods:legcow',
		'butchersdelightfoods:beeftenderloin',
		'butchersdelightfoods:sheepshank',
		'butchersdelightfoods:sheeprack',
		'butchersdelightfoods:sheeploin',
		'butchersdelightfoods:ham',
		'butchersdelightfoods:porkloin',
		'butchersdelightfoods:porkribs',
		'butchersdelightfoods:goat_shank',
		'butchersdelightfoods:goatrack',
		'butchersdelightfoods:goat_loin',
		'butchersdelightfoods:llama_leg',
		'butchersdelightfoods:llamma_ribs',
		'butchersdelightfoods:llama_loin',
		'untamedwilds:food_bear_raw',
		'untamedwilds:food_turtle_raw',
		'untamedwilds:food_pachyderm_raw',
		'untamedwilds:food_bear_cooked',
		'untamedwilds:food_turtle_cooked',
		'untamedwilds:food_pachyderm_cooked'
	]),
	event.add('tfc:foods/meats', [
		'kubejs:shark_meat',
		'kubejs:shark_cooked_meat',
		'butchersdelightfoods:beefribs',
		'butchersdelightfoods:legcow',
		'butchersdelightfoods:beeftenderloin',
		'butchersdelightfoods:sheepshank',
		'butchersdelightfoods:sheeprack',
		'butchersdelightfoods:sheeploin',
		'butchersdelightfoods:ham',
		'butchersdelightfoods:porkloin',
		'butchersdelightfoods:porkribs',
		'butchersdelightfoods:goat_shank',
		'butchersdelightfoods:goatrack',
		'butchersdelightfoods:goat_loin',
		'butchersdelightfoods:llama_leg',
		'butchersdelightfoods:llamma_ribs',
		'butchersdelightfoods:llama_loin',
		//'twilightdelight:raw_insect',
		//'twilightdelight:cooked_insect',
		//'twilightdelight:raw_venison_rib',
		//'twilightdelight:cooked_venison_rib',
		//'twilightdelight:raw_meef_slice',
		//'twilightdelight:cooked_meef_slice',
		//'twilightdelight:hydra_piece',
		'twilightforest:raw_venison',
		'twilightforest:cooked_venison',
		'twilightforest:raw_meef',
		'twilightforest:cooked_meef',
		'twilightforest:hydra_chop',
		'untamedwilds:food_bear_raw',
		'untamedwilds:food_bear_cooked',
		'untamedwilds:food_turtle_raw',
		'untamedwilds:food_turtle_cooked',
		'untamedwilds:food_pachyderm_raw',
		'untamedwilds:food_pachyderm_cooked',
		'minecraft:beef'
	]),
	event.add('tfc:foods/raw_meats', [
		'kubejs:shark_meat',
		'butchersdelightfoods:beefribs',
		'butchersdelightfoods:legcow',
		'butchersdelightfoods:beeftenderloin',
		'butchersdelightfoods:sheepshank',
		'butchersdelightfoods:sheeprack',
		'butchersdelightfoods:sheeploin',
		'butchersdelightfoods:ham',
		'butchersdelightfoods:porkloin',
		'butchersdelightfoods:porkribs',
		'butchersdelightfoods:goat_shank',
		'butchersdelightfoods:goatrack',
		'butchersdelightfoods:goat_loin',
		'butchersdelightfoods:llama_leg',
		'butchersdelightfoods:llamma_ribs',
		'butchersdelightfoods:llama_loin',
		//'twilightdelight:raw_insect',
		//'twilightdelight:raw_venison_rib',
		//'twilightdelight:raw_meef_slice',
		//'twilightdelight:hydra_piece',
		'twilightforest:raw_venison',
		'twilightforest:raw_meef',
		'twilightforest:hydra_chop',
		'untamedwilds:food_bear_raw',
		'untamedwilds:food_turtle_raw',
		'untamedwilds:food_pachyderm_raw',
		'minecraft:beef'
	]),
	event.add('tfc:foods/cooked_meats', [
		'tfc:food/cooked_turtle',
		'kubejs:shark_cooked_meat',
		'twilightforest:cooked_venison',
		'twilightforest:cooked_meef',
		//'twilightdelight:cooked_meef_slice',
		'untamedwilds:food_bear_cooked',
		'untamedwilds:food_turtle_cooked',
		'untamedwilds:food_pachyderm_cooked'
	]),
	event.add('tfc:foods/usable_in_soup', [
		'kubejs:shark_meat',
		'untamedwilds:food_bear_raw',
		'untamedwilds:food_turtle_raw',
		'untamedwilds:food_pachyderm_raw',
		//'twilightdelight:raw_insect',
		//'twilightdelight:raw_venison_rib',
		//'twilightdelight:raw_meef_slice',
		//'twilightdelight:hydra_piece',
		'twilightforest:raw_venison',
		'twilightforest:raw_meef',
		'twilightforest:hydra_chop'
	]),
	event.add('tfc:foods/usable_in_sandwich', [
		'kubejs:shark_cooked_meat',
		'untamedwilds:food_bear_cooked',
		'untamedwilds:food_turtle_cooked',
		'untamedwilds:food_pachyderm_cooked',
		'twilightforest:cooked_venison',
		'twilightforest:cooked_meef',
		//'twilightdelight:cooked_meef_slice'
	]),
	event.add('tfc:foods/usable_in_salad', [
		'kubejs:shark_cooked_meat',
		'untamedwilds:food_bear_cooked',
		'untamedwilds:food_turtle_cooked',
		'untamedwilds:food_pachyderm_cooked',
		//'twilightdelight:cooked_insect',
		'twilightforest:cooked_venison',
		'twilightforest:cooked_meef',
		//'twilightdelight:cooked_meef_slice'
	]),
	event.add('firmalife:foods/pizza_ingredients', [
		'kubejs:shark_cooked_meat',
		'untamedwilds:food_bear_cooked',
		'untamedwilds:food_turtle_cooked',
		'untamedwilds:food_pachyderm_cooked',
		'twilightforest:cooked_venison',
		'twilightforest:cooked_meef',
		//'twilightdelight:cooked_meef_slice'
	]),
	event.add('tfc:foods/can_be_salted', [
		'kubejs:shark_meat',
		'butchersdelightfoods:beefribs',
		'butchersdelightfoods:legcow',
		'butchersdelightfoods:beeftenderloin',
		'butchersdelightfoods:sheepshank',
		'butchersdelightfoods:sheeprack',
		'butchersdelightfoods:sheeploin',
		'butchersdelightfoods:ham',
		'butchersdelightfoods:porkloin',
		'butchersdelightfoods:porkribs',
		'butchersdelightfoods:goat_shank',
		'butchersdelightfoods:goatrack',
		'butchersdelightfoods:goat_loin',
		'butchersdelightfoods:llama_leg',
		'butchersdelightfoods:llamma_ribs',
		'butchersdelightfoods:llama_loin',
		//'twilightdelight:raw_insect',
		//'twilightdelight:raw_venison_rib',
		//'twilightdelight:raw_meef_slice',
		//'twilightdelight:hydra_piece',
		'twilightforest:raw_venison',
		'twilightforest:raw_meef',
		'twilightforest:hydra_chop',
		'untamedwilds:food_bear_raw',
		'untamedwilds:food_turtle_raw',
		'untamedwilds:food_pachyderm_raw',
		'minecraft:mutton',
		'minecraft:porkchop',
		'minecraft:beef',
		'minecraft:chicken'
	]),
	event.add('tfc:foods/can_be_hung', [
		'kubejs:shark_meat',
		'butchersdelightfoods:beefribs',
		'butchersdelightfoods:legcow',
		'butchersdelightfoods:beeftenderloin',
		'butchersdelightfoods:sheepshank',
		'butchersdelightfoods:sheeprack',
		'butchersdelightfoods:sheeploin',
		'butchersdelightfoods:ham',
		'butchersdelightfoods:porkloin',
		'butchersdelightfoods:porkribs',
		'butchersdelightfoods:goat_shank',
		'butchersdelightfoods:goatrack',
		'butchersdelightfoods:goat_loin',
		'butchersdelightfoods:llama_leg',
		'butchersdelightfoods:llamma_ribs',
		'butchersdelightfoods:llama_loin',
		//'twilightdelight:raw_insect',
		//'twilightdelight:raw_venison_rib',
		//'twilightdelight:raw_meef_slice',
		//'twilightdelight:hydra_piece',
		'twilightforest:raw_venison',
		'twilightforest:raw_meef',
		'twilightforest:hydra_chop',
		'untamedwilds:food_bear_raw',
		'untamedwilds:food_turtle_raw',
		'untamedwilds:food_pachyderm_raw',
		'minecraft:mutton',
		'minecraft:porkchop',
		'minecraft:beef',
		'minecraft:chicken'
	]),
	event.add('tfc:small_ore_pieces', [
		//'geolosys:lignite_ore_sample'
	]),
	event.add('forge:pollution_blocks', [
		'tfc:grass/silt',
		'tfc:grass/loam',
		'tfc:grass/sandy_loam',
		'tfc:grass/silty_loam',
		'tfc:dirt/silt',
		'tfc:dirt/loam',
		'tfc:dirt/sandy_loam',
		'tfc:dirt/silty_loam',
		'tfc:clay/silt',
		'tfc:clay/loam',
		'tfc:clay/sandy_loam',
		'tfc:clay/silty_loam',
		'tfc:clay_grass/silt',
		'tfc:clay_grass/loam',
		'tfc:clay_grass/sandy_loam',
		'tfc:clay_grass/silty_loam'
	]),
	event.add('minecraft:leaves', [
		'tfc:plant/cherry_leaves',
		'tfc:plant/green_apple_leaves',
		'tfc:plant/lemon_leaves',
		'tfc:plant/olive_leaves',
		'tfc:plant/orange_leaves',
		'tfc:plant/peach_leaves',
		'tfc:plant/plum_leaves',
		'tfc:plant/red_apple_leaves'
	]),
	event.add('minecraft:dirt', [
		'tfc:grass/silt',
		'tfc:grass/loam',
		'tfc:grass/sandy_loam',
		'tfc:grass/silty_loam'
	]),
	event.add('forge:grain_crops', [
		'tfc:food/barley',
		'tfc:food/maize',
		'tfc:food/oat',
		'tfc:food/rye',
		'tfc:food/rice',
		'tfc:food/wheat'
	]),
	event.add('forge:slab/raw_stone', [
		'tfc:rock/raw/marble_slab',
		'tfc:rock/raw/gneiss_slab',
		'tfc:rock/raw/schist_slab',
		'tfc:rock/raw/phyllite_slab',
		'tfc:rock/raw/slate_slab',
		'tfc:rock/raw/quartzite_slab',
		'tfc:rock/raw/dacite_slab',
		'tfc:rock/raw/andesite_slab',
		'tfc:rock/raw/basalt_slab',
		'tfc:rock/raw/rhyolite_slab',
		'tfc:rock/raw/chalk_slab',
		'tfc:rock/raw/chert_slab',
		'tfc:rock/raw/dolomite_slab',
		'tfc:rock/raw/conglomerate_slab',
		'tfc:rock/raw/limestone_slab',
		'tfc:rock/raw/claystone_slab',
		'tfc:rock/raw/shale_slab',
		'tfc:rock/raw/gabbro_slab',
		'tfc:rock/raw/diorite_slab',
		'tfc:rock/raw/granite_slab',
		'tfc:rock/raw/granite_slab'
	]),
	event.add('forge:supports', [
		'tfc:wood/support/acacia',
		'tfc:wood/support/ash',
		'tfc:wood/support/aspen',
		'tfc:wood/support/birch',
		'tfc:wood/support/blackwood',
		'tfc:wood/support/chestnut',
		'tfc:wood/support/douglas_fir',
		'tfc:wood/support/hickory',
		'tfc:wood/support/kapok',
		'tfc:wood/support/maple',
		'tfc:wood/support/oak',
		'tfc:wood/support/palm',
		'tfc:wood/support/acacia',
		'tfc:wood/support/pine',
		'tfc:wood/support/rosewood',
		'tfc:wood/support/sequoia',
		'tfc:wood/support/spruce',
		'tfc:wood/support/sycamore',
		'tfc:wood/support/white_cedar',
		'tfc:wood/support/willow'
	])
	event.add('forge:beams', ['#forge:supports'])
	event.add('tfc:pileable_ingots', [
		'minecraft:iron_ingot',
		'minecraft:netherite_ingot',
		'beyond_earth:desh_ingot',
		'beyond_earth:ostrum_ingot',
		'beyond_earth:calorite_ingot',
		'immersiveengineering:ingot_hop_graphite',
		'mekanism:ingot_refined_obsidian',
		'mekanism:ingot_refined_glowstone',
		'mekanism:ingot_osmium',
		'pneumaticcraft:ingot_iron_compressed',
		'twilightforest:ironwood_ingot',
		'twilightforest:fiery_ingot',
		'twilightforest:knightmetal_ingot',
		'tconstruct:cobalt_ingot',
		'tconstruct:slimesteel_ingot',
		'tconstruct:amethyst_bronze_ingot',
		'tconstruct:queens_slime_ingot',
		'tconstruct:manyullyn_ingot',
		'tconstruct:hepatizon_ingot'
	]),
	event.add('forge:colored_sleeping_bag', [
		'comforts:sleeping_bag_orange',
		'comforts:sleeping_bag_magenta',
		'comforts:sleeping_bag_light_blue',
		'comforts:sleeping_bag_yellow',
		'comforts:sleeping_bag_lime',
		'comforts:sleeping_bag_pink',
		'comforts:sleeping_bag_gray',
		'comforts:sleeping_bag_light_gray',
		'comforts:sleeping_bag_cyan',
		'comforts:sleeping_bag_purple',
		'comforts:sleeping_bag_blue',
		'comforts:sleeping_bag_brown',
		'comforts:sleeping_bag_green',
		'comforts:sleeping_bag_red',
		'comforts:sleeping_bag_black'
	]),
	event.add('forge:colored_hammock', [
		'comforts:hammock_orange',
		'comforts:hammock_magenta',
		'comforts:hammock_light_blue',
		'comforts:hammock_yellow',
		'comforts:hammock_lime',
		'comforts:hammock_pink',
		'comforts:hammock_gray',
		'comforts:hammock_light_gray',
		'comforts:hammock_cyan',
		'comforts:hammock_purple',
		'comforts:hammock_blue',
		'comforts:hammock_brown',
		'comforts:hammock_green',
		'comforts:hammock_red',
		'comforts:hammock_black'
	]),
	event.add('forge:seed_tree', [
		'dttfc:acacia_seed',
		'dttfc:ash_seed',
		'dttfc:aspen_seed',
		'dttfc:birch_seed',
		'dttfc:blackwood_seed',
		'dttfc:chestnut_seed',
		'dttfc:douglas_fir_seed',
		'dttfc:hickory_seed',
		'dttfc:kapok_seed',
		'dttfc:maple_seed',
		'dttfc:oak_seed',
		'dttfc:palm_seed',
		'dttfc:pine_seed',
		'dttfc:rosewood_seed',
		'dttfc:sequoia_seed',
		'dttfc:spruce_seed',
		'dttfc:sycamore_seed',
		'dttfc:white_cedar_seed',
		'dttfc:willow_seed'
	]),
	event.add('tfc:usable_on_tool_rack', [
		'sewingkit:bone_sewing_needle',
		'sewingkit:iron_sewing_needle',
		'sewingkit:netherite_sewing_needle',
		'sewingkit:file',
		'firmalife:peel',
		'cgm:pistol',
		'cgm:shotgun',
		'cgm:rifle',
		'cgm:grenade_launcher',
		'cgm:bazooka',
		'cgm:mini_gun',
		'cgm:assault_rifle',
		'cgm:machine_pistol',
		'cgm:heavy_rifle',
		'create:wrench',
		'createoreexcavation:vein_finder',
		'minecraft:shears',
		'minecraft:lead',
		'minecraft:crossbow',
		'minecraft:trident',
		'minecraft:flint_and_steel',
		'minecraft:spyglass',
		'exnihilosequentia:wooden_crook',
		'exnihilosequentia:iron_crook',
		'exnihilosequentia:iron_hammer',
		'exnihilosequentia:netherite_hammer',
		'exnihilosequentia:stone_hammer',
		'immersiveengineering:hammer',
		'immersiveengineering:wirecutter',
		'immersiveengineering:screwdriver',
		'immersiveengineering:chemthrower',
		'immersiveengineering:railgun',
		'mcw_tfc_aio:roofing_hammer',
		'mcw_tfc_aio:pliers',
		'mcwroofs:roofing_hammer',
		'mcwwindows:hammer',
		'butchersdelight:cleaver',
		'#tconstruct:modifiable'
	]),
	event.add('tfc:plant/green', [
		'tfc:plant/bluegrass',
		'tfc:plant/bromegrass',
		'tfc:plant/fountain_grass',
		'tfc:plant/manatee_grass',
		'tfc:plant/orchard_grass',
		'tfc:plant/ryegrass',
		'tfc:plant/scutch_grass',
		'tfc:plant/timothy_grass',
		'tfc:plant/raddia_grass',
		'tfc:plant/arrowhead',
		'tfc:plant/coontail',
		'tfc:plant/duckweed',
		'tfc:plant/field_horsetail',
		'tfc:plant/gutweed',
		'tfc:plant/king_fern',
		'tfc:plant/lady_fern',
		'tfc:plant/licorice_fern',
		'tfc:plant/moss',
		'tfc:plant/ostrich_fern',
		'tfc:plant/pistia',
		'tfc:plant/sago',
		'tfc:plant/switchgrass',
		'tfc:plant/sword_fern',
		'tfc:plant/tall_fescue_grass',
		'tfc:plant/toquilla_palm',
		'tfc:plant/water_lily',
		'tfc:plant/water_taro',
		'tfc:plant/leafy_kelp'
	]),
	event.add('tfc:herbal_grass', [
		'tfc:plant/bluegrass',
		'tfc:plant/bromegrass',
		'tfc:plant/fountain_grass',
		'tfc:plant/manatee_grass',
		'tfc:plant/orchard_grass',
		'tfc:plant/ryegrass',
		'tfc:plant/scutch_grass',
		'tfc:plant/timothy_grass',
		'tfc:plant/raddia_grass',
		'tfc:plant/switchgrass',
		'tfc:plant/tall_fescue_grass',
		'tfc:plant/turtle_grass',
		'firmalife:plant/butterfly_grass',
		'tfc:plant/leafy_kelp',
		'tfc:plant/winged_kelp'
	]),
	event.add('tfc:plant/red', [
		'tfc:plant/anthurium',
		'tfc:plant/blood_lily',
		'tfc:plant/butterfly_milkweed',
		'tfc:plant/guzmania',
		'tfc:plant/heliconia',
		'tfc:plant/kangaroo_paw',
		'tfc:plant/poppy',
		'tfc:plant/rose',
		'tfc:plant/vriesea',
		'tfc:plant/snapdragon_red',
		'tfc:plant/tropical_milkweed',
		'tfc:plant/tulip_red'
	]),
	event.add('tfc:plant/white', [
		'tfc:plant/houstonia',
		'tfc:plant/meads_milkweed',
		'tfc:plant/oxeye_daisy',
		'tfc:plant/primrose',
		'tfc:plant/sacred_datura',
		'tfc:plant/snapdragon_white',
		'tfc:plant/trillium',
		'tfc:plant/tulip_white',
		'tfc:plant/yucca'
	]),
	event.add('tfc:tea_leaves', [
		'tfc:plant/labrador_tea',
		'tfc:plant/hibiscus',
		'twilightforest:mining_leaves'
	]),
	event.add('tfc:gem_powders/slot', [
		'tfc:powder/amethyst',
		'tfc:powder/opal',
		'tfc:powder/ruby',
		'tfc:powder/sapphire',
		'tfc:powder/topaz'
	]),
	event.add('tfc:firepit_fuel', [
		'tinycoal:tinycharcoal',
		'tinycoal:tinycoal',
		'tfc:stick_bunch',
		'#forge:rods/wooden',
		'#forge:seed_tree',
		'farmersdelight:tree_bark'
	]),
	event.add('forge:sleeping_bags', [
		'#travelersbackpack:sleeping_bags',
		'#forge:colored_sleeping_bag',
		'comforts:sleeping_bag_white'
	]),
	event.add('forge:magma_block', [
		'minecraft:magma_block',
		'tfc:rock/magma/granite',
		'tfc:rock/magma/diorite',
		'tfc:rock/magma/gabbro',
		'tfc:rock/magma/rhyolite',
		'tfc:rock/magma/basalt',
		'tfc:rock/magma/andesite',
		'tfc:rock/magma/dacite'
	]),
	event.add('forge:farmlands', [
		'tfc:farmland/silt',
		'tfc:farmland/loam',
		'tfc:farmland/sandy_loam',
		'tfc:farmland/silty_loam'
	]),
	event.add('forge:axes/stone', [
		'tfc:stone/axe/igneous_extrusive',
		'tfc:stone/axe/igneous_intrusive',
		'tfc:stone/axe/metamorphic',
		'tfc:stone/axe/sedimentary'
	]),
	event.add('forge:hoes/stone', [
		'tfc:stone/hoe/igneous_extrusive',
		'tfc:stone/hoe/igneous_intrusive',
		'tfc:stone/hoe/metamorphic',
		'tfc:stone/hoe/sedimentary'
	]),
	event.add('forge:javelins/stone', [
		'tfc:stone/javelin/igneous_extrusive',
		'tfc:stone/javelin/igneous_intrusive',
		'tfc:stone/javelin/metamorphic',
		'tfc:stone/javelin/sedimentary'
	]),
	event.add('forge:hammers/stone', [
		'tfc:stone/hammer/igneous_extrusive',
		'tfc:stone/hammer/igneous_intrusive',
		'tfc:stone/hammer/metamorphic',
		'tfc:stone/hammer/sedimentary'
	]),
	event.add('forge:knifes/stone', [
		'tfc:stone/knife/igneous_extrusive',
		'tfc:stone/knife/igneous_intrusive',
		'tfc:stone/knife/metamorphic',
		'tfc:stone/knife/sedimentary'
	]),
	event.add('forge:shovels/stone', [
		'tfc:stone/shovel/igneous_extrusive',
		'tfc:stone/shovel/igneous_intrusive',
		'tfc:stone/shovel/metamorphic',
		'tfc:stone/shovel/sedimentary'
	]),
	event.add('tfc:metal/pickaxe_head/first_metal', [
		'tfc:metal/pickaxe_head/copper',
		'tfc:metal/pickaxe_head/bismuth_bronze',
		'tfc:metal/pickaxe_head/black_bronze',
		'tfc:metal/pickaxe_head/bronze'
	]),
	event.add('forge:shovels/stone', [
		'tfc:stone/shovel/igneous_extrusive',
		'tfc:stone/shovel/igneous_intrusive',
		'tfc:stone/shovel/metamorphic',
		'tfc:stone/shovel/sedimentary'
	]),
	event.add('tfc:tanned_hides', [
		'kubejs:hide_tanned_s',
		'kubejs:hide_tanned_m',
		'kubejs:hide_tanned_l'
	]),
	event.add('tfc:oiled_hides', [
		'kubejs:hide_oiled_s',
		'kubejs:hide_oiled_m',
		'kubejs:hide_oiled_l'
	]),
	event.add('tfc:finish_hides', [
		'kubejs:hide_finish_s',
		'kubejs:hide_finish_m',
		'kubejs:hide_finish_l'
	]),
	event.add('tfc:lamp_fuel', [
		'tfc:bucket/tallow',
		'tfc:bucket/olive_oil',
		'immersiveengineering:creosote_bucket'
	]),
	event.add('tfc:stripped_logs', [
		'tfc:wood/stripped_log/acacia',
		'tfc:wood/stripped_log/ash',
		'tfc:wood/stripped_log/aspen',
		'tfc:wood/stripped_log/birch',
		'tfc:wood/stripped_log/blackwood',
		'tfc:wood/stripped_log/chestnut',
		'tfc:wood/stripped_log/douglas_fir',
		'tfc:wood/stripped_log/hickory',
		'tfc:wood/stripped_log/kapok',
		'tfc:wood/stripped_log/maple',
		'tfc:wood/stripped_log/oak',
		'tfc:wood/stripped_log/palm',
		'tfc:wood/stripped_log/pine',
		'tfc:wood/stripped_log/rosewood',
		'tfc:wood/stripped_log/sequoia',
		'tfc:wood/stripped_log/spruce',
		'tfc:wood/stripped_log/sycamore',
		'tfc:wood/stripped_log/white_cedar',
		'tfc:wood/stripped_log/willow'
	]),
	event.add('tfc:planks', [
		'tfc:wood/planks/acacia',
		'tfc:wood/planks/ash',
		'tfc:wood/planks/aspen',
		'tfc:wood/planks/birch',
		'tfc:wood/planks/blackwood',
		'tfc:wood/planks/chestnut',
		'tfc:wood/planks/douglas_fir',
		'tfc:wood/planks/hickory',
		'tfc:wood/planks/kapok',
		'tfc:wood/planks/maple',
		'tfc:wood/planks/oak',
		'tfc:wood/planks/palm',
		'tfc:wood/planks/pine',
		'tfc:wood/planks/rosewood',
		'tfc:wood/planks/sequoia',
		'tfc:wood/planks/spruce',
		'tfc:wood/planks/sycamore',
		'tfc:wood/planks/white_cedar',
		'tfc:wood/planks/willow'
	]),
	event.add('tfc:tree_saplings', [
		'tfc:wood/sapling/acacia',
		'tfc:wood/sapling/ash',
		'tfc:wood/sapling/aspen',
		'tfc:wood/sapling/birch',
		'tfc:wood/sapling/blackwood',
		'tfc:wood/sapling/chestnut',
		'tfc:wood/sapling/douglas_fir',
		'tfc:wood/sapling/hickory',
		'tfc:wood/sapling/kapok',
		'tfc:wood/sapling/maple',
		'tfc:wood/sapling/oak',
		'tfc:wood/sapling/palm',
		'tfc:wood/sapling/pine',
		'tfc:wood/sapling/rosewood',
		'tfc:wood/sapling/sequoia',
		'tfc:wood/sapling/spruce',
		'tfc:wood/sapling/sycamore',
		'tfc:wood/sapling/white_cedar',
		'tfc:wood/sapling/willow'
	]),
	event.add('forge:arrow_head', [
		'minecraft:iron_nugget',
		'minecraft:flint',
		'#forge:nuggets/silver',
		'#forge:nuggets/tin',
		'#forge:nuggets/zinc',
		'#forge:nuggets/copper'
	]),
	event.add('forge:dead_animal', [
		'butchersdelight:dead_cow',
		'butchersdelight:deadsheep',
		'butchersdelight:deadpig',
		'butchersdelight:deadgoat',
		'butchersdelight:deadhoglin',
		'butchersdelight:deadchiken',
		'butchersdelight:deadrabbitbrown',
		'butchersdelight:deadllama',
		'butchersdelight:deadstrider'
	]),
	event.add('tfc:drink_items', [
		'tfc:ceramic/jug',
		'waterflasks:leather_flask',
		'waterflasks:iron_flask'
	]),
	event.add('forge:hide', [
		'untamedwilds:hide_bigcat_snow_leopard'
	]),
	event.add('tfc:scrapable', [
		'#betteranimalsplus:pelts',
		'minecraft:rabbit_hide',
		'butchersdelight:cow_hide',
		'butchersdelight:hoglinskin',
		'#forge:hide',
		'kubejs:hide_oiled_s',
		'kubejs:hide_oiled_m',
		'kubejs:hide_oiled_l',
		'kubejs:hide_finish_s',
		'kubejs:hide_finish_m',
		'kubejs:hide_finish_l'
	]),
	event.add('forge:pelts', [
		'#betteranimalsplus:pelts',
		'butchersdelight:cow_hide',
		'butchersdelight:hoglinskin',
		'#forge:hide'
	]),
	event.add('forge:tallow_source', [
		'untamedwilds:material_blubber'
	])
	event.add('forge:eggs', [
		'untamedwilds:egg_snake',
		'untamedwilds:egg_softshell_turtle',
		'untamedwilds:egg_tortoise',
		'untamedwilds:egg_large_snake',
		'untamedwilds:egg_monitor'
	])
	event.add('forge:sandstone', [
		'tfc:raw_sandstone/yellow',
		'tfc:smooth_sandstone/yellow',
		'tfc:cut_sandstone/yellow',
		'tfc:raw_sandstone/red',
		'tfc:smooth_sandstone/red',
		'tfc:cut_sandstone/red'
	]),
	event.add('forge:nuggets/andesite_alloy', [
		'#forge:nuggets/iron',
		'#forge:nuggets/zinc',
		'#forge:nuggets/tin'
	]),
	event.add('forge:nuggets/knightmetal', [
		'twilightforest:armor_shard'
	]),
	event.add('forge:thatch', [
		'untamedwilds:carpet_straw',
		'tfc:thatch'
	]),
	event.add('forge:filters', [
		'htm:plant_fabric',
		'immersiveengineering:hemp_fabric'
	]),
	event.add('forge:dirt', [
		'#tfc:dirt',
		'#minecraft:dirt'
	]),
	event.add('forge:wax', [
		'firmalife:beeswax'
	]),
	event.add('forge:wax/beeswax', [
		'firmalife:beeswax'
	]),
	event.add('forge:oil_seeds', [
		'tfc:seeds/melon',
		'tfc:seeds/pumpkin',
		'tfc:seeds/jute',
		'tfc:seeds/squash',
		'tfc:seeds/beet',
		'tfc:seeds/carrot',
		'tfc:seeds/cabbage',
		'tfc:seeds/rice',
		'tfc:seeds/wheat',
		'tfc:seeds/maize',
		'tfc:seeds/rye',
		'tfc:seeds/oat',
		'tfc:seeds/soybean',
		'tfc:seeds/barley',
		'immersiveengineering:seed'
	]),
	event.add('forge:double_sheets/compressed_iron', [
		'kubejs:compressed_double_sheet'
	]),
	event.add('forge:double_sheets', [
		'kubejs:compressed_double_sheet'
	]),
	event.add('forge:sheets/compressed_iron', [
		'kubejs:compressed_sheet'
	]),
	event.add('forge:sheets', [
		'kubejs:compressed_sheet'
	]),
	event.add('forge:wires/compressed_iron', [
		'kubejs:compressed_wire'
	]),
	event.add('forge:wires', [
		'kubejs:compressed_wire'
	]),
	event.add('forge:double_ingots/compressed_iron', [
		'kubejs:compressed_double_ingot'
	]),
	event.add('forge:double_ingots', [
		'kubejs:compressed_double_ingot'
	]),
	event.add('forge:ingots', [
		'refinedstorage:quartz_enriched_iron'
	]),
	event.add('forge:ingots/irons', [
		'minecraft:iron_ingot',
		'tfc:metal/ingot/wrought_iron'
	]),
	event.add('forge:ingots/allbronze', [
		'tfc:metal/ingot/bronze',
		'tfc:metal/ingot/bismuth_bronze',
		'tfc:metal/ingot/black_bronze'
	]),
	event.add('forge:ingots/glass', [
		'kubejs:primitive_glass_pane'
	]),
	event.add('forge:glass_panes', [
		'kubejs:primitive_glass_pane'
	]),
	event.add('forge:2panes', [
		'kubejs:primitive_glass_pane',
		'tconstruct:clear_glass_pane'
	]),
	event.add('forge:glass/bottle', [
		'minecraft:glass_bottle',
		'firmalife:empty_jar'
	]),
	event.add('forge:ingots/seared_stone', [
		'tconstruct:seared_brick'
	]),
	event.add('forge:rock_andesite_alloy', [
		'tfc:rock/loose/andesite'
	]),
	event.add('forge:rods', [
		'immersiveposts:stick_lead',
		'immersiveposts:stick_constantan',
		'immersiveposts:stick_electrum',
		'immersiveposts:stick_uranium',
		'immersiveengineering:stick_aluminum'
	]),
	event.add('forge:rods/iron', ['tfc:metal/rod/wrought_iron']),
	event.add('inventorio:pickaxes', ['#tconstruct:modifiable/harvest/stone', 'pneumaticcraft:jackhammer', 'immersiveengineering:drill']),
	event.add('inventorio:axes', ['#tconstruct:modifiable/melee/primary', 'immersiveengineering:buzzsaw']),
	event.add('inventorio:shovels', ['#tconstruct:modifiable/harvest/primary']),
	event.add('inventorio:hoes', ['#tconstruct:modifiable/harvest/primary', '#tfc:knives']),
	event.add('inventorio:swords', ['#tconstruct:modifiable/melee/sword','#tconstruct:modifiable/melee/parry']),
	event.add('forge:rods/compressed_iron', ['kubejs:compressed_rod']),
	event.add('forge:plates', [
		'kubejs:compressed_sheet',
		'tfc:metal/sheet/rose_gold',
		'tfc:metal/sheet/zinc',
		'tfc:metal/sheet/brass',
		'tfc:metal/sheet/bronze',
		'tfc:metal/sheet/tin'
	]),
	event.add('forge:canvas', ['farmersdelight:canvas']),
	event.add('forge:plates/compressed_iron', ['kubejs:compressed_sheet']),
	event.add('forge:plates/iron', ['tfc:metal/sheet/wrought_iron']),
	event.add('forge:plates/steel', ['tfc:metal/sheet/steel']),
	event.add('forge:plates/gold', ['tfc:metal/sheet/gold']),
	event.add('forge:plates/rose_gold', ['tfc:metal/sheet/rose_gold']),
	event.add('forge:plates/copper', ['tfc:metal/sheet/copper']),
	event.add('forge:plates/brass', ['tfc:metal/sheet/brass']),
	event.add('forge:plates/bronze', ['tfc:metal/sheet/bronze']),
	event.add('forge:plates/nickel', ['tfc:metal/sheet/nickel']),
	event.add('forge:plates/silver', ['tfc:metal/sheet/silver']),
	event.add('forge:plates/steel', ['tfc:metal/sheet/steel']),
	event.add('forge:plates/tin', ['tfc:metal/sheet/tin']),
	event.add('forge:plates/zinc', ['tfc:metal/sheet/zinc']),
	event.add('forge:plates/cast_iron', ['tfc:metal/sheet/cast_iron']),
	event.add('forge:plates/sterling_silver', ['tfc:metal/sheet/sterling_silver']),
	event.add('forge:plates/blue_steel', ['tfc:metal/sheet/blue_steel']),
	event.add('forge:plates/red_steel', ['tfc:metal/sheet/red_steel']),
	event.add('forge:plates/black_steel', ['tfc:metal/sheet/black_steel']),
	event.add('forge:plates/electrum', ['tfc_ie_addon:metal/sheet/electrum']),
	event.add('forge:plates/constantan', ['tfc_ie_addon:metal/sheet/constantan']),
	event.add('forge:plates/aluminum', ['tfc_ie_addon:metal/sheet/aluminum']),
	event.add('forge:plates/uranium', ['tfc_ie_addon:metal/sheet/uranium']),
	event.add('forge:plates/lead', ['tfc_ie_addon:metal/sheet/lead']),
	event.add('forge:cloth', ['tfc:silk_cloth', 'tfc:burlap_cloth','tfc:wool_cloth']),
	event.add('forge:dusts/charcoal', ['tfc:powder/charcoal']),
	event.add('forge:dusts/sulfur', ['tfc:powder/sulfur']),
	event.add('forge:dusts/ash', ['tfc:powder/wood_ash', 'bodyhygiene:ash']),
	event.add('forge:glue', ['tfc:glue', 'create:super_glue']),
	event.add('forge:bicoals', ['tfc:ore/bituminous_coal', 'minecraft:coal']),
	event.add('forge:raw_materials', ['kubejs:raw_platinum', 'createoreexcavation:raw_diamond', 'createoreexcavation:raw_emerald', 'createoreexcavation:raw_redstone', 'beyond_earth:raw_desh', 'beyond_earth:raw_ostrum', 'beyond_earth:raw_calorite']),
	event.add('forge:raw_materials/platinum', ['kubejs:raw_platinum'])
	event.add('forge:raw_materials/diamond', ['createoreexcavation:raw_diamond'])
	event.add('forge:raw_materials/emerald', ['createoreexcavation:raw_emerald'])
	event.add('forge:raw_materials/redstone', ['createoreexcavation:raw_redstone'])
	event.add('forge:tallow_source', ['tfc:blubber', 'minecraft:rotten_flesh'])
	event.add('forge:berries', [
		'tfc:food/cranberry',
		'tfc:food/bunchberry',
		'tfc:food/strawberry',
		'tfc:food/raspberry',
		'tfc:food/wintergreen_berry',
		'tfc:food/blackberry',
		'tfc:food/blueberry'
	])
	event.add('forge:apples', [
		'tfc:food/green_apple',
		'tfc:food/red_apple'
	])
	event.add('forge:sugar_source', [
		//'tfc:food/beet',
		'tfc:food/sugarcane',
		'minecraft:sugar_cane'
	])
	event.add('forge:ethanol_source', [
		'tfc:food/beet',
		'tfc:food/potato',
		'tfc:food/cranberry',
		'tfc:food/blackberry',
		'tfc:food/blueberry',
		'tfc:food/bunchberry',
		'tfc:food/raspberry',
		'tfc:food/green_apple',
		'tfc:food/red_apple',
		'tfc:food/sugarcane'
	])
	event.add('tfc:small_fishing_bait', [
		'waterstrainer:worm',
		'exnihilosequentia:silkworm'
	])
	event.add('forge:head_hardened_steel', [
		'tfc:metal/double_ingot/blue_steel',
		'tfc:metal/double_ingot/red_steel'
	])
	event.add('forge:space_ores', [
		'beyond_earth:raw_desh',
		'beyond_earth:raw_ostrum',
		'beyond_earth:raw_calorite'
	])
	// ==========  REMOVE
	event.remove('forge:storage_blocks/copper', ['minecraft:cut_copper'])
	event.remove('forge:ingots/cast_iron', ['minecraft:iron_ingot'])
	event.remove('forge:dusts/coal_coke', ['tfc:powder/graphite'])
	event.remove('tfc:foods/raw_meats', ['tfc:food/cooked_turtle'])
	event.remove('forge:leather', [
		'butchersdelight:cow_hide',
		'butchersdelight:sheephide',
		'butchersdelight:hoglinskin',
		'untamedwilds:hide_bear_ashen',
		'untamedwilds:hide_bear_black',
		'untamedwilds:hide_bear_brown',
		'untamedwilds:hide_bear_white',
		'untamedwilds:hide_bigcat_jaguar',
		'untamedwilds:hide_bigcat_leopard',
		'untamedwilds:hide_bigcat_snow_leopard',
		'untamedwilds:hide_bigcat_lion',
		'untamedwilds:hide_bigcat_panther',
		'untamedwilds:hide_bigcat_puma',
		'untamedwilds:hide_bigcat_tiger'
	])
	event.removeAllTagsFrom(
		'pneumaticcraft:oil',
		'pneumaticcraft:diesel',
		'pneumaticcraft:kerosene',
		'pneumaticcraft:gasoline',
		'pneumaticcraft:lubricant',
		'pneumaticcraft:ethanol',
		'mekanism:dust_obsidian',
		'mekanism:dust_sulfur',
		'immersiveengineering:dust_sulfur',
		'beyond_earth:iron_stick',
		'beyond_earth:iron_plate',
		'beyond_earth:steel_ingot',
		'beyond_earth:steel_block',
		'create:brass_ingot',
		'create:brass_sheet',
		'create:copper_sheet',
		'create:iron_sheet',
		'create:golden_sheet',
		'create:zinc_ingot',
		'create:wheat_flour',
		'htm:sawdust',
		'createaddition:electrum_ingot',
		'createaddition:electrum_nugget',
		'createaddition:electrum_sheet',
		'createaddition:electrum_wire',
		'createaddition:electrum_rod',
		'createaddition:brass_rod',
		'createaddition:copper_rod',
		'createaddition:iron_rod',
		'createaddition:gold_rod',
		'createaddition:zinc_sheet',
		'exnihilosequentia:copper_nugget',
		'exnihilosequentia:zinc_ingot',
		'exnihilosequentia:lead_ingot',
		'exnihilosequentia:silver_ingot',
		'exnihilosequentia:nickel_ingot',
		'exnihilosequentia:tin_ingot',
		'exnihilosequentia:platinum_ingot',
		'exnihilosequentia:aluminum_ingot',
		'exnihilosequentia:uranium_ingot',
		'exnihilosequentia:raw_lead',
		'exnihilosequentia:raw_silver',
		'exnihilosequentia:raw_nickel',
		'exnihilosequentia:raw_tin',
		'exnihilosequentia:raw_platinum',
		'exnihilosequentia:raw_aluminum',
		'exnihilosequentia:raw_uranium',
		'exnihilosequentia:raw_zinc',
		'immersiveengineering:plate_aluminum',
		'immersiveengineering:plate_lead',
		'immersiveengineering:plate_uranium',
		'immersiveengineering:plate_constantan',
		'immersiveengineering:plate_electrum',
		'immersiveengineering:plate_iron',
		'immersiveengineering:plate_gold',
		'immersiveengineering:plate_silver',
		'immersiveengineering:ingot_nickel',
		'immersiveengineering:ingot_silver',
		'immersiveengineering:ingot_steel',
		'immersiveengineering:dust_steel',
		'immersiveengineering:dust_gold',
		'immersiveengineering:dust_iron',
		'immersiveengineering:dust_lead',
		'immersiveengineering:dust_uranium',
		'immersiveengineering:plate_steel',
		'immersiveengineering:plate_nickel',
		'immersiveengineering:stick_steel',
		'immersiveengineering:stick_iron',
		'immersiveengineering:stick_stick',
		'immersiveengineering:nugget_copper',
		'immersiveengineering:dust_copper',
		'immersiveengineering:dust_saltpeter',
		'immersiveengineering:wire_copper',
		'immersiveengineering:plate_copper',
		'immersiveposts:stick_copper',
		'immersiveposts:stick_gold',
		'immersiveposts:stick_silver',
		'immersiveposts:stick_nickel',
		'mekanism:dust_charcoal',
		'mekanism:ingot_bronze',
		'mekanism:ingot_tin',
		'mekanism:ingot_lead',
		'mekanism:ingot_steel',
		'mekanism:nugget_steel',
		'mekanism:nugget_lead',
		'mekanism:raw_lead',
		'mekanism:ingot_uranium',
		'mekanism:raw_uranium',
		'mekanism:nugget_uranium',
		'mekanism:block_uranium',
		'mekanism:block_steel',
		'mekanism:block_lead',
		'mekanism:dust_diamond',
		'minecraft:copper_ingot',
		'minecraft:chest',
		'minecraft:glass',
		'minecraft:glass_pane',
		'minecraft:gold_ingot',
		'pneumaticcraft:wheat_flour',
		'tinycoal:tinycoal',
		'tinycoal:tinycharcoal',
		'tconstruct:pig_iron_ingot',
		'tconstruct:rose_gold_ingot',
		'tconstruct:copper_nugget'
	)
    // by air!
    event.add('forge:double_sheets', ['immersiveengineering:plate_aluminum','immersiveengineering:plate_constantan','immersiveengineering:plate_electrum','immersiveengineering:plate_lead','immersiveengineering:plate_uranium'])
    event.add('tfc:metal_item/aluminum', ['immersiveengineering:plate_aluminum'])
    event.add('forge:double_sheets/aluminum', ['immersiveengineering:plate_aluminum'])
    event.add('tfc:metal_item/constantan', ['immersiveengineering:plate_constantan'])
    event.add('forge:double_sheets/constantan', ['immersiveengineering:plate_constantan'])
    event.add('tfc:metal_item/electrum', ['immersiveengineering:plate_electrum'])
    event.add('forge:double_sheets/electrum', ['immersiveengineering:plate_electrum'])
    event.add('tfc:metal_item/lead', ['immersiveengineering:plate_lead'])
    event.add('forge:double_sheets/lead', ['immersiveengineering:plate_lead'])
    event.add('tfc:metal_item/uranium', ['immersiveengineering:plate_uranium'])
    event.add('forge:double_sheets/uranium', ['immersiveengineering:plate_uranium'])
	//
})