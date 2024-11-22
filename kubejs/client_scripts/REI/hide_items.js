const list = ['chemlib:graphite', 'chemlib:epinephrine', 'chemlib:caffeine', 'chemlib:ammonia', 'chemlib:acetylene', 'chemlib:keratin', 'chemlib:ethylene', 'chemlib:cellulose', 'chemlib:chitin', 'chemlib:nitrate', 'chemlib:water', 'chemlib:kaolinite', 'chemlib:protein', 'chemlib:sucrose', 'chemlib:carbonate', 'chemlib:phosphate', 'chemlib:hydroxide', 'chemlib:hydroxylapatite', 'chemlib:beryl', 'chemlib:starch', 'chemlib:cucurbitacin', 'chemlib:triglyceride', 'chemlib:ethanol', 'chemlib:amide', 'chemlib:urea', 'chemlib:ammonium', 'chemlib:mullite', 'chemlib:methane', 'chemlib:ethane', 'chemlib:propane', 'chemlib:butane', 'chemlib:pentane', 'chemlib:hexane'];

REIEvents.hide('item', event => {
    event.hide([
        'ad_astra:coal_generator',
        'ad_astra:compressor',
        'ad_astra:cryo_freezer',
        'ad_astra:desh_cable',
        'ad_astra:desh_fluid_pipe',
        'ad_astra:energizer',
        'ad_astra:fuel_refinery',
        'ad_astra:hammer',
        'ad_astra:iron_rod',
        'ad_astra:nasa_workbench',
        'ad_astra:ostrum_fluid_pipe',
        'ad_astra:steel_cable',
        'ad_astra:water_pump',
        'ad_astra:wrench',
        'ad_astra:iron_plate',
        'ad_astra:steel_plate',
        'ad_astra:iron_rod',
        'ad_astra:oxygen_bucket',
        'ad_astra:cryo_fuel_bucket',
        'ad_astra:oil_bucket',
        'ad_astra:fuel_bucket',
        'ad_astra:engine_fan',
        'ad_astra:engine_frame',
        'ad_astra:cable_duct',
        'ad_astra:fluid_pipe_duct',
        'ad_astra:steel_block',
        'ad_astra:steel_nugget',
        'ad_astra:steel_ingot',
        'autoworkstations:auto_enchanting_table_xp_inside',
        'minecraft:command_block',
        'minecraft:barrier',
        'minecraft:light',
        'minecraft:repeating_command_block',
        'minecraft:chain_command_block',
        'minecraft:structure_void',
        'minecraft:structure_block',
        'minecraft:jigsaw',
        'minecraft:debug_stick',
        'minecraft:knowledge_book',
        'modern_industrialization:creative_storage_unit',
        'modern_industrialization:creative_tank',
        'modern_industrialization:creative_barrel',
        'modern_industrialization:diesel_jetpack',
        'modern_industrialization:singularity',
        'mineralas:eraser',
        'tempad:he_who_remains_tempad',
        'ae2:creative_item_cell',
        'appbot:creative_mana_cell',
        'ae2:cable_bus',
        'ae2:creative_energy_cell',
        'ae2:creative_fluid_cell',
        'ae2:debug_item_gen',
        'ae2:debug_chunk_loader',
        'ae2:debug_meteorite_placer',
        'ae2:debug_card',
        'ae2:debug_replicator_card',
        'ae2:facade',
        'ae2:debug_energy_gen',
        'ae2:debug_cube_gen',
        'ae2:debug_phantom_node',
        'ae2:debug_eraser',
        'ae2:wrapped_generic_stack',
        'ae2:silicon',
        'ae2:vibration_chamber',
        'ae2:spatial_anchor',
        'ftbquests:stage_barrier',
        'ftbquests:barrier',
        'ftbquests:custom_icon',
        'ftbquests:missing_item',
        'ftbquests:lootcrate',
        'botania:corporea_spark_creative',
        'botania:lens_storm',
        'botania:infrangible_platform',
        'botania:creative_pool',
        'botania:ender_hand',
        'botania:fertilizer',
        'botania:red_string_fertilizer',
        'botania:laputa_shard',
        'botania:spawner_mover',
        'botania:black_hole_talisman',
        'botania:mining_ring',
        'botania:reach_ring',
        'botania:speed_up_belt',
        'botania:super_travel_belt',
        'botania:travel_belt',
        'botania:magnet_ring_greater',
        'botania:magnet_ring',
        'botania:water_ring',
        'botania:knockback_belt',
        'botania:exchange_rod',
        'chunkloaders:ultimate_chunk_loader',
        'chunkloaders:advanced_chunk_loader',
        'exco:processor',
        'exco:processor_ender',
        'kibe:chunk_loader',
        'kibe:heater',
        'kibe:dehumidifier',
        'kibe:cobblestone_generator_mk1',
        'kibe:cobblestone_generator_mk2',
        'kibe:cobblestone_generator_mk3',
        'kibe:cobblestone_generator_mk4',
        'kibe:cobblestone_generator_mk5',
        'kibe:basalt_generator_mk1',
        'kibe:basalt_generator_mk2',
        'kibe:basalt_generator_mk3',
        'kibe:basalt_generator_mk4',
        'kibe:basalt_generator_mk5',
        'kibe:trash_can',
        'kibe:pocket_trash_can',
        'kibe:wither_proof_block',
        'kibe:obsidian_sand',
        'kibe:magnet',
        'kibe:magma_ring',
        'kibe:water_ring',
        'kibe:cursed_seeds',
        'kibe:cursed_dirt',
        'kibe:drawbridge',
        // Tin
        'mythicmetals:tin_ore',
        'mythicmetals:raw_tin_block',
        'mythicmetals:raw_tin',
        'mythicmetals:tin_nugget',
        'mythicmetals:tin_ingot',
        'mythicmetals:tin_block',
        'mythicmetals:tin_anvil',
        // Platinum
        'mythicmetals:platinum_ore',
        'mythicmetals:raw_platinum_block',
        'mythicmetals:raw_platinum',
        'mythicmetals:platinum_nugget',
        'mythicmetals:platinum_ingot',
        'mythicmetals:platinum_block',
        'mythicmetals:platinum_anvil',
        // Silver
        'mythicmetals:silver_ore',
        'mythicmetals:raw_silver_block',
        'mythicmetals:raw_silver',
        'mythicmetals:silver_nugget',
        'mythicmetals:silver_ingot',
        'mythicmetals:silver_block',
        'mythicmetals:silver_anvil',
        'mythicmetals:silver_boots',
        'mythicmetals:silver_leggings',
        'mythicmetals:silver_chestplate',
        'mythicmetals:silver_helmet',
        'mythicmetals:silver_sword',
        'mythicmetals:silver_axe',
        'mythicmetals:silver_pickaxe',
        'mythicmetals:silver_shovel',
        'mythicmetals:silver_hoe',
        // Manganese
        'mythicmetals:manganese_ore',
        'mythicmetals:raw_manganese_block',
        'mythicmetals:raw_manganese',
        'mythicmetals:manganese_nugget',
        'mythicmetals:manganese_ingot',
        'mythicmetals:manganese_block',
        'mythicmetals:manganese_anvil',
        // Steel
        'mythicmetals:steel_nugget',
        'mythicmetals:steel_ingot',
        'mythicmetals:steel_block',
        'mythicmetals:steel_anvil',
        'mythicmetals:steel_boots',
        'mythicmetals:steel_leggings',
        'mythicmetals:steel_chestplate',
        'mythicmetals:steel_helmet',
        'mythicmetals:steel_sword',
        'mythicmetals:steel_axe',
        'mythicmetals:steel_pickaxe',
        'mythicmetals:steel_shovel',
        'mythicmetals:steel_hoe',
        // Copper
        'mythicmetals:copper_nugget',
        'mythicmetals:copper_boots',
        'mythicmetals:copper_leggings',
        'mythicmetals:copper_chestplate',
        'mythicmetals:copper_helmet',
        'mythicmetals:copper_sword',
        'mythicmetals:copper_axe',
        'mythicmetals:copper_pickaxe',
        'mythicmetals:copper_shovel',
        'mythicmetals:copper_hoe',
        // Bronze
        'mythicmetals:bronze_nugget',
        'mythicmetals:bronze_ingot',
        'mythicmetals:bronze_block',
        'mythicmetals:bronze_boots',
        'mythicmetals:bronze_leggings',
        'mythicmetals:bronze_chestplate',
        'mythicmetals:bronze_helmet',
        'mythicmetals:bronze_sword',
        'mythicmetals:bronze_axe',
        'mythicmetals:bronze_pickaxe',
        'mythicmetals:bronze_shovel',
        'mythicmetals:bronze_hoe',
        'mythicmetals:bronze_anvil',
        // Quadrillum
        'mythicmetals:quadrillum_axe',
        'mythicmetals:quadrillum_pickaxe',
        'mythicmetals:quadrillum_shovel',
        'mythicmetals:quadrillum_hoe',
        'mythicmetals:quadrillum_nuke_core',
        // Runite
        'mythicmetals:runite_sword',
        'mythicmetals:runite_axe',
        'mythicmetals:runite_pickaxe',
        'mythicmetals:runite_shovel',
        'mythicmetals:runite_hoe',
        // Osmium
        'mythicmetals:osmium_boots',
        'mythicmetals:osmium_leggings',
        'mythicmetals:osmium_chestplate',
        'mythicmetals:osmium_helmet',
        'mythicmetals:osmium_sword',
        'mythicmetals:osmium_axe',
        'mythicmetals:osmium_pickaxe',
        'mythicmetals:osmium_shovel',
        'mythicmetals:osmium_hoe',
        'mythicmetals:osmium_anvil',
        // Banglum
        'mythicmetals:banglum_sword',
        'mythicmetals:banglum_axe',
        'mythicmetals:banglum_pickaxe',
        'mythicmetals:banglum_shovel',
        'mythicmetals:banglum_hoe',
        'mythicmetals:banglum_nuke_core',
        // Carmot
        'mythicmetals:carmot_nuke_core',
        // Bullshit
        'mythicmetals:doge',
        'mythicmetals:froge',
        'neepmeat:large_crusher',
        'things:item_magnet',
        'things:stone_glowstone_fixture',
        'things:quartz_glowstone_fixture',
        'things:deepslate_glowstone_fixture',
        'things:diamond_pressure_plate',
        'things:container_key',
        'meatweapons:ballistic_cartridge',
        'meatweapons:engine',
        'meatweapons:fusion',
        'meatweapons:hand_cannon',
        'meatweapons:machine_pistol',
        'meatweapons:light_machine_gun',
        'meatweapons:ma75',
        'meatweapons:heavy_cannon',
        // NeepMeat
        'neepmeat:alloy_kiln',
        'neepmeat:grinder',
        'neepmeat:stirling_engine',
        'neepmeat:alloy_kiln',
        'neepmeat:rusty_panel',
        'neepmeat:small_trommel',
        'neepmeat:bottler',
        'neepmeat:assembler',
        'neepmeat:transducer',
        'neepmeat:mixer',
        'neepmeat:contaminated_dirt',
        'neepmeat:writhing_earth_spout',
        'neepmeat:writhing_stone',
        'neepmeat:copper_coil',
        'neepmeat:stator',
        'neepmeat:refractory_brick',
        'neepmeat:advanced_tank',
        'neepmeat:advanced_flex_tank',
        'neepmeat:whisper_brass_ingot',
        'neepmeat:flywheel',
        'neepmeat:pinkdrink',
        'neepmeat:can',
        'neepmeat:carton',
        'neepmeat:milk_carton',
        'neepmeat:meat_carton',
        'neepmeat:farming_scutter',
        'neepmeat:advanced_router',
        'neepmeat:filtered_ejector',
        'neepmeat:stomach',
        //'neepmeat:deployer',
        //'neepmeat:large_motor',
        //'neepmeat:advanced_motor',
        //'neepmeat:motor_unit',
        //'neepmeat:separator',
        //'neepmeat:pylon',
        // 'neepmeat:hydraulic_press',
        // 'neepmeat:casting_basin',
        //'neepmeat:death_blades',
        // 'neepmeat:well_head',
        // 'neepmeat:charnel_pump',
        // 'neepmeat:collector',
        // 'neepmeat:crucible',
        // WIP
        'neepmeat:homogeniser',
        'neepmeat:alloy_kiln',
        'neepmeat:mesh_pane',
        'neepmeat:cheese_cleaver',
        'neepmeat:debug',
        'neepmeat:slasher',
        'neepmeat:copper_pipe',
        'neepmeat:check_valve',
        'neepmeat:power_emitter',
        'neepmeat:large_flywheel',
        'bewitchment:raw_silver_block',
        'bewitchment:silver_block',
        'bewitchment:silver_ore',
        'bewitchment:deepslate_silver_ore',
        'bewitchment:silver_arrow',
        'bewitchment:raw_silver',
        'bewitchment:silver_ingot',
        'bewitchment:silver_nugget',
        'bewitchment:salt',
        'bewitchment:deepslate_salt_ore',
        'bewitchment:salt_ore',
        'bewitchment:salt_block',
        'whisperwoods:hand_of_fate',
        'travelersbackpack:squid',
        'travelersbackpack:chicken',
        'travelersbackpack:sheep',
        'travelersbackpack:pig',
        'travelersbackpack:cow',
        'travelersbackpack:horse',
        'travelersbackpack:ocelot',
        'travelersbackpack:fox',
        'travelersbackpack:wolf',
        'travelersbackpack:bee',
        'travelersbackpack:wither',
        'travelersbackpack:spider',
        'travelersbackpack:skeleton',
        'travelersbackpack:magma_cube',
        'travelersbackpack:ghast',
        'travelersbackpack:blaze',
        'travelersbackpack:enderman',
        'travelersbackpack:dragon',
        'travelersbackpack:creeper',
        'travelersbackpack:pumpkin',
        'travelersbackpack:melon',
        'travelersbackpack:hay',
        'travelersbackpack:cactus',
        'travelersbackpack:cake',
        'travelersbackpack:sponge',
        'travelersbackpack:snow',
        'travelersbackpack:sandstone',
        'travelersbackpack:nether',
        'travelersbackpack:end',
        'travelersbackpack:bookshelf',
        'travelersbackpack:quartz',
        'travelersbackpack:coal',
        'travelersbackpack:redstone',
        'travelersbackpack:lapis',
        'travelersbackpack:bat',
        'travelersbackpack:villager',
        'travelersbackpack:iron_golem',
        'expandeddelight:ground_salt',
        'fwaystones:void_totem',
        'fwaystones:local_void',
        'fwaystones:waystone_debugger',
        'fwaystones:scroll_of_infinite_knowledge',
        'chemlib:ethylene_source',
        'sophisticatedstorage:controller',
        'sophisticatedstorage:storage_link',
        'sophisticatedstorage:pickup_upgrade',
        'sophisticatedstorage:advanced_pickup_upgrade',
        'sophisticatedstorage:filter_upgrade',
        'sophisticatedstorage:advanced_filter_upgrade',
        'sophisticatedstorage:magnet_upgrade',
        'sophisticatedstorage:advanced_magnet_upgrade',
        'sophisticatedstorage:compacting_upgrade',
        'sophisticatedstorage:advanced_compacting_upgrade',
        'sophisticatedstorage:void_upgrade',
        'sophisticatedstorage:advanced_void_upgrade',
        'sophisticatedstorage:smelting_upgrade',
        'sophisticatedstorage:auto_smelting_upgrade',
        'sophisticatedstorage:smoking_upgrade',
        'sophisticatedstorage:auto_smoking_upgrade',
        'sophisticatedstorage:blasting_upgrade',
        'sophisticatedstorage:auto_blasting_upgrade',
        'sophisticatedstorage:crafting_upgrade',
        'sophisticatedstorage:stonecutter_upgrade',
        'sophisticatedstorage:jukebox_upgrade',
        'sophisticatedstorage:pump_upgrade',
        'sophisticatedstorage:advanced_pump_upgrade',
        'sophisticatedstorage:xp_pump_upgrade',
        'sophisticatedstorage:compression_upgrade',
        'sophisticatedstorage:hopper_upgrade',
        'sophisticatedstorage:advanced_hopper_upgrade',
        'sophisticatedstorage:packing_tape',
        'sophisticatedstorage:debug_tool',
        'sophisticatedstorage:inaccessible_slot',
        'sophisticatedstorage:chipped/botanist_workbench_upgrade',
        'sophisticatedstorage:chipped/glassblower_upgrade',
        'sophisticatedstorage:chipped/carpenters_table_upgrade',
        'sophisticatedstorage:chipped/loom_table_upgrade',
        'sophisticatedstorage:chipped/mason_table_upgrade',
        'sophisticatedstorage:chipped/alchemy_bench_upgrade',
        'sophisticatedstorage:chipped/tinkering_table_upgrade',
        'bewitchment:oak_poppet_shelf',
        'bewitchment:spruce_poppet_shelf',
        'bewitchment:birch_poppet_shelf',
        'bewitchment:jungle_poppet_shelf',
        'bewitchment:acacia_poppet_shelf',
        'bewitchment:dark_oak_poppet_shelf',
        'bewitchment:crimson_poppet_shelf',
        'bewitchment:warped_poppet_shelf',
        'bewitchment:juniper_poppet_shelf',
        'bewitchment:cypress_poppet_shelf',
        'bewitchment:elder_poppet_shelf',
        'bewitchment:dragons_blood_poppet_shelf',
        '@minerally',
        '@create',
        '@lootr',
        /chemlib:(.*)(_)/,
        /geocluster:(?!prospectors_pick)(.*)/,
        'fluxnetworks:flux_block',
        'fluxnetworks:flux_dust',
        'fluxnetworks:admin_configurator',
        'neepmeat:meat_steel_hoe',
        'neepmeat:meat_steel_axe',
        'neepmeat:meat_steel_pickaxe',
        'neepmeat:meat_steel_shovel',
        'itemalchemy:dark_matter_sword',
        'itemalchemy:dark_matter_pickaxe',
        'itemalchemy:dark_matter_axe',
        'itemalchemy:dark_matter_shovel',
        'itemalchemy:dark_matter_hoe',
        'itemalchemy:red_matter_sword',
        'itemalchemy:red_matter_pickaxe',
        'itemalchemy:red_matter_axe',
        'itemalchemy:red_matter_hoe',
        'itemalchemy:red_matter_shovel',
        'itemalchemy:red_matter_hoe',
        'itemalchemy:alchemy_chest',
        'itemalchemy:low_covalence_dust',
        'itemalchemy:middle_covalence_dust',
        'itemalchemy:high_covalence_dust',
        'itemalchemy:tome_of_knowledge',
        'itemalchemy:philosopher_stone',
        'spectrum:perturbed_eye',
        'kibe:cooler',
        'buildinggadgets:gadget_copy_paste',
        'buildinggadgets:template',
        'buildinggadgets:template_manager',
        'neepmeat:shield'


    ]);
    event.hide(list)

    // for sophisticated storage dont touch
    const material = ['iron', 'gold', 'diamond', 'netherite']
    material.forEach(type => {
        event.hide(`sophisticatedstorage:${type}_barrel`);
        event.hide(`sophisticatedstorage:${type}_chest`);
        event.hide(`sophisticatedstorage:${type}_shulker_box`);
        for (let tier = 1; tier <= 4; tier++) {
            event.hide(`sophisticatedstorage:limited_${type}_barrel_${tier}`);
        }
    });

    // for simplysword
    const material_for_removing = ['steel', 'bronze', 'copper', 'osmium']
    const weapon_type = ['longsword', 'twinblade', 'rapier', 'katana', 'sai', 'spear', 'glaive', 'warglaive', 'cutlass', 'claymore', 'greathammer', 'greataxe', 'chakram', 'scythe', 'halberd']
    weapon_type.forEach(weapon => {
        material_for_removing.forEach(material => {
            event.hide(`simplyswords:mythicmetals_compat/${material}/${material}_${weapon}`)
        });
    });
});

// REIEvents.hide('liquid', event => {
//     // event.hide(/chemlib:(.*)(_)/)
//     event.hide('chemlib:ethylene_source')
// })
REIEvents.removeCategories(event => {
    event.remove('create:automatic_shaped')
    event.remove('create:draining')
    event.remove('create:spout_filling')
    event.remove('create:item_application')
    event.remove('create:block_cutting')
    event.remove('create:automatic_packing')
    event.remove('create:automatic_brewing')
    event.remove('create:automatic_shapeless')
    event.remove('create:mixing')
    event.remove('create:fan_blasting')
    event.remove('create:fan_smoking')
    event.remove('create:crushing')
    event.remove('create:milling')

    event.remove('neepmeat:plugins/trommel')
    // event.remove('neepmeat:plugins/heating')
    event.remove('neepmeat:plugins/alloy_smelting')
    event.remove('neepmeat:plugins/block_crushing')
})
