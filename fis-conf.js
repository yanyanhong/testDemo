fis.match('*.{jpg,png,js,css}', {
    release: '/static/$0',
    useHash:true
});
fis.match("*.{js}",{
    isMod:true
})

fis.match('::package', {
    spriter: fis.plugin('csssprites')
});
fis.match("*.{css}",{
    useSprite:true
})