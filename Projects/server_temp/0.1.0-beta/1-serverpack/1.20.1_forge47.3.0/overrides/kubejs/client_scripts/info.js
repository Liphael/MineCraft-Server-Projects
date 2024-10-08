// priority: 0
onEvent('item.tooltip', tooltip => {
	tooltip.addAdvanced('create:vertical_gearbox', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
		  text.add(1, Text.gold('Use brass wrench on a normal gearbox'))
		  text.add(2, [Text.gold('Rotate it with '), Text.of('Right click ').yellow(), Text.gold('on a side')])
		}
	})
	tooltip.addAdvanced('kubejs:feed_vege', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
		  text.add(1, Text.gold('fodder that will allow you to tame and'))
		  text.add(2, Text.gold('breed some of the wild Boar and Tortoise'))
		}
	})
	tooltip.addAdvanced('kubejs:feed_seed', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
		  text.add(1, Text.gold('fodder that will allow you to tame and breed'))
		  text.add(2, Text.gold('some of the wild animals - Aardvark, Terror Bird'))
		}
	})
	tooltip.addAdvanced('kubejs:feed_hay', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
		  text.add(1, Text.gold('fodder that will allow you to tame and'))
		  text.add(2, Text.gold('breed some of the cattle - Big Bisons'))
		}
	})
	tooltip.addAdvanced('kubejs:feed_fruit', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
		  text.add(1, Text.gold('fodder that will help you tame and breed some'))
		  text.add(2, Text.gold('of the lizards - Newts, Giant Salamanders, Monitor'))
		}
	})
	tooltip.addAdvanced('kubejs:feed_meat', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
		  text.add(1, Text.gold('fodder that will help you tame and breed'))
		  text.add(2, Text.gold('some of the wilds animals - Opossum'))
		}
	})
	tooltip.addAdvanced('untamedwilds:chum', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
		  text.add(1, Text.gold('fodder that will help you tame and breed some of the'))
		  text.add(2, Text.gold('wild fishes - sunfish, triggerfish, sawfish, arowana '))
		}
	})
	tooltip.addAdvanced('minecraft:charcoal', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
		  text.add(1, Text.of('Need charcoal?'))
		  text.add(2, [Text.of('Place logs into a hole in a stack with ').gold(), Text.of('Shift + Right Click').yellow()])
		  text.add(3, Text.gold('Use a Fire Starter to burn it and quickly cover with a solid block'))
		  text.add(4, Text.gold('Wait patiently - until there is NO smoke'))
		  text.add(5, Text.gold('Mine with a shovel'))
		}
	})
	tooltip.addAdvanced('kubejs:canoe', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('First boat had to be chiselled and burned from the wood' ))
			text.add(2, Text.red('IMPORTANT - only a few types of wood can be chiseled' ))
			text.add(3, Text.red('Aspen / Chestnut / Douglas fir / Kapok'))
			text.add(4, Text.red('Pine / Rosewood / Spruce / White cedar / Willow' ))
			text.add(5, [Text.gold('- Place 3 logs of '), Text.of('stripped ').red(), Text.of('wood horizontally on one line' ).gold()])
			text.add(6, Text.gold('- Use a saw with a chisel on all the logs'))
			text.add(7, Text.gold('- Use an axe with a chisel on all logs '))
			text.add(8, Text.gold('- Use a Fire Starter or Flint & Steel and burn the center '))
			text.add(9, Text.gold('- Wait patiently '))
			text.add(10, Text.red('WARNING - you CANNOT break the boat - because you will destroy it '))
		}
	})
	tooltip.addAdvanced('minecraft:campfire', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Creating a firepit' ))
			text.add(2, Text.gold('- Put 1 log and 3 sticks together on top of a block' ))
			text.add(3, Text.gold('- Use a Fire Starter or Flint & Steel - burn the top of the block '))
			text.add(4, Text.gold('- Greater chance when you put paper, straw and/or pinecones - optional'))
		}
	})
	tooltip.addAdvanced('minecraft:glass_bottle', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('It is not only bottle' ))
			text.add(2, Text.gold('Has a small amount of air inside' ))
			text.add(3, Text.gold('Very useful when diving'))
		}
	})
	tooltip.addAdvanced('#hordes:infection_cures', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold(' when you get infection Zombies' ))
			text.add(2, Text.gold(' it can save your life this item ' ))
			text.add(2, Text.gold(' use it to heal from infection '))
		}
	})
	tooltip.addAdvanced('#forge:space_ores', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Mineral ores from other planets' ))
			text.add(2, [Text.gold('You will only find them on the '), Text.red('Moon and other planets' )])
		}
	})
	tooltip.addAdvanced('#tfc:small_fishing_bait', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('You can use it as bait while fishing' ))
		}
	})
	tooltip.addAdvanced('#forge:dead_animal', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, [Text.gold('Hang a dead animal on a hook from '), Text.red('ButchersDelight')])
			text.add(2, Text.gold('Small animals (chicken, rabbit) place on ground' ))
			text.add(3, Text.gold('Use any knife and dissect the meat' ))
			//text.add(3, Text.gold('Optionally you can roast them over a campfire but you get less meat ' ))
			//this cannot be done since the vanilla campfire is removed
			//TODO: update if there is another way to bake the whole animal
		}
	})
	tooltip.addAdvanced('#tfc:drink_items', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Use this item to store drinking water' ))
			text.add(2, Text.gold('But be careful, fresh water can sometimes give you poisoning' ))
			text.add(3, Text.gold('Drink only boiled, purified or mineral water' ))
		}
	})
	tooltip.addAdvanced('#tfc:lamp_fuel', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('You can use as fuel in a lamp' ))
			text.add(2, Text.gold('It is enough for a long burn time' ))
		}
	})
	tooltip.addAdvanced('#minecraft:wool', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('This item filters sulfur in filter frames' ))
			text.add(2, Text.gold('Place where sulfur collects or on top of the chimney' ))
		}
	})
	tooltip.addAdvanced('#forge:filters', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('This item filters dusts in filter frames' ))
			text.add(2, Text.gold('Place where dusts collects or on top of the chimney' ))
		}
	})
	tooltip.addAdvanced('#forge:cloth', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('This item filters dusts in filter frames' ))
			text.add(2, Text.gold('Place where dusts collects or on top of the chimney' ))
		}
	})
	tooltip.addAdvanced('#minecraft:leaves', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('This item filters carbon in filter frames' ))
			text.add(2, Text.gold('Place where carbon collects or on top of the chimney' ))
		}
	})
	tooltip.addAdvanced('tfc:thatch', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('This item filters carbon in filter frames' ))
			text.add(2, Text.gold('Place where carbon collects or on top of the chimney' ))
		}
	})
	tooltip.addAdvanced('myrtrees:latex', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Use "Tree Tap" and "Bucket for Latex" on Rubbertree' ))
			text.add(2, Text.gold('If you cannot find a Rubbertree use Rubber Sapling ' ))
			text.add(3, Text.gold('Plant an rubber sapling an dirt, wait or use Tree Fertilizer' ))
			text.add(4, Text.gold('Using a latex bucket, collect latex and wait until solidifies' ))
		}
	})
	tooltip.addAdvanced('farmersrespite:coffee_berries', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Coffee fruits can be found exclusively on coffee bushes' ))
			text.add(2, Text.gold('They grow in the Nether in basalt biomes' ))
			text.add(3, Text.gold('The journey can be difficult but rewarding' ))
		}
	})
	tooltip.addAdvanced('tfc:food/cattail_root', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Cattails you can find near water' ))
			text.add(2, Text.gold('Look for lakes and reservoirs of water' ))
			text.add(3, Text.gold('Use a knife - Does not always drop' ))
		}
	})
	tooltip.addAdvanced('adpother:dust', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Falling onto the ground, degrades it and makes it barren, turning it into gravel' ))
			text.add(2, Text.gold('Dust can be filtered with vacuum cleaners or in chimney filters with paper, cloths and/or fabric' ))
		}
	})
	tooltip.addAdvanced('adpother:sulfur', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Pollutes the air to a large extent, causing acid rain and dying plants' ))
			text.add(2, Text.gold('Sulfur can be filtered in chimney filters filled with wool ' ))
		}
	})
	tooltip.addAdvanced('adpother:carbon', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Pollutes the air to a large extent, causing excessive grass growth' ))
			text.add(2, Text.gold('Carbon can be filtered in chimney filters filled with leaves or thatch' ))
		}
	})
	tooltip.add('waystones:waystone', ["Hard item to craft, don't lose it", 'will provide you with a way to teleport'])
})