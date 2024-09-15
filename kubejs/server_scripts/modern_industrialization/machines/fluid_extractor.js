
ServerEvents.recipes(event => {
    // Fluid Extractor
    global.dyeColors.forEach(color => {
        event.recipes.modern_industrialization.fluid_extractor(4, 200)
            .itemIn(`spectrum:${color.name}_pigment`)
            .fluidOut(`modern_industrialization:${color.name}_ink`, 100)
        event.recipes.modern_industrialization.fluid_extractor(2, 100)
            .itemIn(`minecraft:${color.name}_dye`)
            .fluidOut(`modern_industrialization:${color.name}_ink`, 5)
        event.recipes.modern_industrialization.fluid_extractor(4, 200)
            .itemIn(`spectrum:${color.name}_leaves`)
            .fluidOut(`modern_industrialization:${color.name}_ink`, 20)
        event.recipes.modern_industrialization.fluid_extractor(8, 300)
            .itemIn(`spectrum:${color.name}_log`)
            .fluidOut(`modern_industrialization:${color.name}_ink`, 15)
        event.recipes.modern_industrialization.fluid_extractor(4, 200)
            .itemIn(`botania:${color.name}_petal`)
            .fluidOut(`modern_industrialization:${color.name}_ink`, 25)
    })
    event.recipes.modern_industrialization.fluid_extractor(4, 200)
        .itemIn('#c:raw_meat')
        .fluidOut('neepmeat:tissue_slurry', 50)

    event.recipes.modern_industrialization.fluid_extractor(16, 100)
        .itemIn('vitalize:experience')
        .fluidOut('kibe:liquid_xp', 20)
    event.recipes.modern_industrialization.fluid_extractor(16, 200)
        .itemIn('vitalize:experience_squared')
        .fluidOut('kibe:liquid_xp', 40)
    event.recipes.modern_industrialization.fluid_extractor(16, 300)
        .itemIn('vitalize:experience_cubed')
        .fluidOut('kibe:liquid_xp', 160)
})