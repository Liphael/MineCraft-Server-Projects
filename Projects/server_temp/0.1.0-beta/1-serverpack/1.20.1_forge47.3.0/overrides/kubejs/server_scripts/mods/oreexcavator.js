onEvent('recipes', event => {
	//Drilling recipes (Items)
	//Spawning weight the bigger the number the higher chance to spawn.
	//See server config for empty chunk weight.
	//Arguments: output item(s), ore vein name in Text Component, spawning weight, extraction time in ticks at 32 RPM.
	//event.recipes.createoreexcavation.drilling('minecraft:redstone', '{"text": "> REDSTONE <"}', 5, 300).id("redstone_ex");
	//event.recipes.createoreexcavation.drilling('minecraft:raw_copper', '{"text": "> COPPER <"}', 10, 600).id("cooper_ex");
	
	//Coal vein with 5% chance for diamond and require a diamond drill and lava for drilling
	//Always finite 5x-8x base
	//event.recipes.createoreexcavation.drilling([Item.of('tfc:ore/cinnabar'), Item.of('create:powdered_obsidian').withChance(0.30), Item.of('fluxnetworks:flux_dust').withChance(0.30), Item.of('createoreexcavation:raw_redstone').withChance(0.30)], '{"text": "> REDSTONE MIX <"}', 8, 1000).drill('createoreexcavation:diamond_drill').fluid('minecraft:water').alwaysFinite().veinSize(1, 4).id("redstone_mix");
	//event.recipes.createoreexcavation.drilling([Item.of('minecraft:coal'), Item.of('tinycoal:tinycoal').withChance(0.75), Item.of('tfc:ore/lapis_lazuli').withChance(0.20), Item.of('tfc:ore/diamond').withChance(0.05)], '{"text": "> COAL MIX <"}', 15, 1000).drill('#createoreexcavation:drills').fluid('minecraft:water').alwaysFinite().veinSize(2, 6).id("coal_mix");
	//event.recipes.createoreexcavation.drilling([Item.of('createoreexcavation:raw_diamond'), Item.of('tfc:ore/diamond').withChance(0.30), Item.of('minecraft:diamond').withChance(0.20), Item.of('createoreexcavation:raw_emerald').withChance(0.15)], '{"text": "> GEMS <"}', 2, 1000).drill('createoreexcavation:netherite_drill').fluid('minecraft:water').alwaysFinite().veinSize(0.1, 0.7).id("gems");
	//event.recipes.createoreexcavation.drilling([Item.of('exnihilosequentia:copper_pieces'), Item.of('tfc:ore/normal_native_copper').withChance(0.30), Item.of('create:copper_nugget').withChance(0.10), Item.of('minecraft:raw_copper').withChance(0.05)], '{"text": "> COPPER MIX <"}', 6, 1000).drill('#createoreexcavation:drills').fluid('minecraft:water').alwaysFinite().veinSize(3, 8).id("copper_mix");
	//event.recipes.createoreexcavation.drilling([Item.of('exnihilosequentia:zinc_pieces'), Item.of('tfc:ore/normal_sphalerite').withChance(0.30), Item.of('create:zinc_nugget').withChance(0.10), Item.of('create:raw_zinc').withChance(0.05)], '{"text": "> ZINC MIX <"}', 5, 1000).drill('#createoreexcavation:drills').fluid('minecraft:water').alwaysFinite().veinSize(3, 8).id("zinc_mix");
	//event.recipes.createoreexcavation.drilling([Item.of('exnihilosequentia:tin_pieces'), Item.of('tfc:ore/normal_cassiterite').withChance(0.30), Item.of('mekanism:nugget_tin').withChance(0.10), Item.of('mekanism:raw_tin').withChance(0.05), Item.of('exnihilosequentia:platinum_pieces').withChance(0.05)], '{"text": "> TIN MIX <"}', 5, 1000).drill('#createoreexcavation:drills').fluid('minecraft:water').alwaysFinite().veinSize(2, 4).id("tin_mix");
	//event.recipes.createoreexcavation.drilling([Item.of('exnihilosequentia:uranium_pieces'), Item.of('create:crushed_raw_uranium').withChance(0.30), Item.of('immersiveengineering:nugget_uranium').withChance(0.10), Item.of('immersiveengineering:raw_uranium').withChance(0.05)], '{"text": "> URANIUM MIX <"}', 2, 1000).drill('#createoreexcavation:drills').fluid('minecraft:water').alwaysFinite().veinSize(1, 4).id("uranium_mix");
	//event.recipes.createoreexcavation.drilling([Item.of('exnihilosequentia:iron_pieces'), Item.of('tfc:ore/normal_limonite').withChance(0.30), Item.of('minecraft:iron_nugget').withChance(0.10), Item.of('minecraft:raw_iron').withChance(0.05)], '{"text": "> IRON MIX <"}', 10, 1000).drill('#createoreexcavation:drills').fluid('minecraft:water').alwaysFinite().veinSize(4, 9).id("iron_mix");
	//event.recipes.createoreexcavation.drilling([Item.of('exnihilosequentia:gold_pieces'), Item.of('tfc:ore/normal_native_gold').withChance(0.30), Item.of('minecraft:gold_nugget').withChance(0.10), Item.of('minecraft:raw_gold').withChance(0.05)], '{"text": "> GOLD MIX <"}', 5, 1000).drill('#createoreexcavation:drills').fluid('minecraft:water').alwaysFinite().veinSize(1, 2).id("gold_mix");
	//event.recipes.createoreexcavation.drilling([Item.of('exnihilosequentia:lead_pieces'), Item.of('exnihilosequentia:silver_pieces').withChance(0.30), Item.of('immersiveengineering:nugget_lead').withChance(0.10), Item.of('tfc:ore/normal_native_silver').withChance(0.05), Item.of('immersiveengineering:raw_lead').withChance(0.05)], '{"text": "> GALENA MIX <"}', 5, 1000).drill('#createoreexcavation:drills').fluid('minecraft:water').alwaysFinite().veinSize(1, 2).id("galena_mix");
	//event.recipes.createoreexcavation.drilling([Item.of('exnihilosequentia:aluminum_pieces'), Item.of('exnihilosequentia:nickel_pieces').withChance(0.30), Item.of('immersiveengineering:nugget_aluminum').withChance(0.10), Item.of('tfc:ore/normal_garnierite').withChance(0.05), Item.of('immersiveengineering:raw_aluminum').withChance(0.05)], '{"text": "> BAUXITE MIX <"}', 5, 1000).drill('#createoreexcavation:drills').fluid('minecraft:water').alwaysFinite().veinSize(1, 3).id("bauxite_mix");
	//event.recipes.createoreexcavation.drilling([Item.of('create:crushed_raw_osmium'), Item.of('mekanism:raw_osmium').withChance(0.30), Item.of('mekanism:nugget_osmium').withChance(0.10), Item.of('mekanism:clump_osmium').withChance(0.05)], '{"text": "> OSMIUM MIX <"}', 3, 1000).drill('createoreexcavation:netherite_drill').fluid('minecraft:water').alwaysFinite().veinSize(0.5, 2).id("osmium_mix");
	//
	//Iron vein only in overworld and a stress requirement of 512 xRPM (default is 256 xRPM)
	//With a finite vein size between 3x-8.5x base (if finite veins are enabled)
	//event.recipes.createoreexcavation.drilling('minecraft:raw_iron', '{"text": "> IRON <"}', 20, 100).veinSize(3, 8.5).stress(512).id("iron_ex");
	//biomeBlacklist is also available

	//Fluid extractor recipes (Fluids)
	//event.recipes.createoreexcavation.extracting(Fluid.of('minecraft:lava', 1000), '{"text": "Lava"}', 10, 100).drill('createoreexcavation:diamond_drill').alwaysFinite().id("lava");
	//event.recipes.createoreexcavation.extracting(Fluid.of('minecraft:water', 1000), '{"text": "Deep Water"}', 75, 100).alwaysInfinite().id("water");
	event.recipes.createoreexcavation.extracting(Fluid.of('kubejs:mineral_water', 500), '{"text": "Mineral Deep Water"}', 10, 10000).alwaysFinite().id("mineral_water");
	event.recipes.createoreexcavation.extracting(Fluid.of('kubejs:purified_water', 5), '{"text": "Purified Deep Water"}', 10, 1000).alwaysInfinite().id("pure_water");
	event.recipes.createoreexcavation.extracting(Fluid.of('immersivepetroleum:crudeoil', 4000), '{"translate":"block.immersivepetroleum.fluid_crude_oil"}', 10, 10000).drill('createoreexcavation:netherite_drill').alwaysFinite().id("crude_oil");
	//The biome, stress and drill settings are the same as the drilling recipe
	
	//Set base value in config for finite veins
})