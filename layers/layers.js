var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_la_libertad_limite_provincia_1 = new ol.format.GeoJSON();
var features_la_libertad_limite_provincia_1 = format_la_libertad_limite_provincia_1.readFeatures(json_la_libertad_limite_provincia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_la_libertad_limite_provincia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_la_libertad_limite_provincia_1.addFeatures(features_la_libertad_limite_provincia_1);
var lyr_la_libertad_limite_provincia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_la_libertad_limite_provincia_1, 
                style: style_la_libertad_limite_provincia_1,
                interactive: true,
                title: '<img src="styles/legend/la_libertad_limite_provincia_1.png" /> la_libertad_limite_provincia'
            });
var format_la_libertad_rios_2 = new ol.format.GeoJSON();
var features_la_libertad_rios_2 = format_la_libertad_rios_2.readFeatures(json_la_libertad_rios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_la_libertad_rios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_la_libertad_rios_2.addFeatures(features_la_libertad_rios_2);
var lyr_la_libertad_rios_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_la_libertad_rios_2, 
                style: style_la_libertad_rios_2,
                interactive: true,
                title: '<img src="styles/legend/la_libertad_rios_2.png" /> la_libertad_rios'
            });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_la_libertad_limite_provincia_1.setVisible(true);lyr_la_libertad_rios_2.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_la_libertad_limite_provincia_1,lyr_la_libertad_rios_2];
lyr_la_libertad_limite_provincia_1.set('fieldAliases', {'gid': 'gid', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'ccdd': 'ccdd', 'nombdep': 'nombdep', 'ccpp': 'ccpp', 'nombprov': 'nombprov', 'capital': 'capital', 'idprov': 'idprov', 'shape_star': 'shape_star', 'shape_stle': 'shape_stle', 'orig_fid': 'orig_fid', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_la_libertad_rios_2.set('fieldAliases', {'gid': 'gid', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'clasificac': 'clasificac', 'nombre': 'nombre', 'ubigeo': 'ubigeo', 'nomdep': 'nomdep', 'ccdd': 'ccdd', 'nomprov': 'nomprov', 'ccpp': 'ccpp', 'nomdist': 'nomdist', 'ccdi': 'ccdi', 'idprov': 'idprov', 'shape_stle': 'shape_stle', 'orig_fid': 'orig_fid', 'shape_leng': 'shape_leng', 'tipo': 'tipo', });
lyr_la_libertad_limite_provincia_1.set('fieldImages', {'gid': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'ccdd': 'TextEdit', 'nombdep': 'TextEdit', 'ccpp': 'TextEdit', 'nombprov': 'TextEdit', 'capital': 'TextEdit', 'idprov': 'TextEdit', 'shape_star': 'TextEdit', 'shape_stle': 'TextEdit', 'orig_fid': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_la_libertad_rios_2.set('fieldImages', {'gid': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'clasificac': 'TextEdit', 'nombre': 'TextEdit', 'ubigeo': 'TextEdit', 'nomdep': 'TextEdit', 'ccdd': 'TextEdit', 'nomprov': 'TextEdit', 'ccpp': 'TextEdit', 'nomdist': 'TextEdit', 'ccdi': 'TextEdit', 'idprov': 'TextEdit', 'shape_stle': 'TextEdit', 'orig_fid': 'TextEdit', 'shape_leng': 'TextEdit', 'tipo': 'TextEdit', });
lyr_la_libertad_limite_provincia_1.set('fieldLabels', {'gid': 'header label', 'objectid_1': 'header label', 'objectid': 'header label', 'ccdd': 'header label', 'nombdep': 'header label', 'ccpp': 'header label', 'nombprov': 'header label', 'capital': 'header label', 'idprov': 'header label', 'shape_star': 'header label', 'shape_stle': 'header label', 'orig_fid': 'header label', 'shape_leng': 'header label', 'shape_area': 'header label', });
lyr_la_libertad_rios_2.set('fieldLabels', {'gid': 'header label', 'objectid_1': 'header label', 'objectid': 'header label', 'clasificac': 'header label', 'nombre': 'header label', 'ubigeo': 'header label', 'nomdep': 'header label', 'ccdd': 'header label', 'nomprov': 'header label', 'ccpp': 'header label', 'nomdist': 'header label', 'ccdi': 'header label', 'idprov': 'header label', 'shape_stle': 'header label', 'orig_fid': 'header label', 'shape_leng': 'header label', 'tipo': 'header label', });
lyr_la_libertad_rios_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});