var wms_layers = [];

var format_WilayahAdministrasi_0 = new ol.format.GeoJSON();
var features_WilayahAdministrasi_0 = format_WilayahAdministrasi_0.readFeatures(json_WilayahAdministrasi_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilayahAdministrasi_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahAdministrasi_0.addFeatures(features_WilayahAdministrasi_0);
var lyr_WilayahAdministrasi_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WilayahAdministrasi_0, 
                style: style_WilayahAdministrasi_0,
                popuplayertitle: "Wilayah Administrasi",
                interactive: true,
    title: 'Wilayah Administrasi<br />\
    <img src="styles/legend/WilayahAdministrasi_0_0.png" /> BUKITINTAN<br />\
    <img src="styles/legend/WilayahAdministrasi_0_1.png" /> GABEK<br />\
    <img src="styles/legend/WilayahAdministrasi_0_2.png" /> GERUNGGANG<br />\
    <img src="styles/legend/WilayahAdministrasi_0_3.png" /> GIRIMAYA<br />\
    <img src="styles/legend/WilayahAdministrasi_0_4.png" /> PANGKALBALAM<br />\
    <img src="styles/legend/WilayahAdministrasi_0_5.png" /> RANGKUI<br />\
    <img src="styles/legend/WilayahAdministrasi_0_6.png" /> TAMANSARI<br />\
    <img src="styles/legend/WilayahAdministrasi_0_7.png" /> <br />'
        });
var format_Pemukiman_1 = new ol.format.GeoJSON();
var features_Pemukiman_1 = format_Pemukiman_1.readFeatures(json_Pemukiman_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemukiman_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_1.addFeatures(features_Pemukiman_1);
var lyr_Pemukiman_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pemukiman_1, 
                style: style_Pemukiman_1,
                popuplayertitle: "Pemukiman",
                interactive: true,
                title: '<img src="styles/legend/Pemukiman_1.png" /> Pemukiman'
            });
var format_Waduk_2 = new ol.format.GeoJSON();
var features_Waduk_2 = format_Waduk_2.readFeatures(json_Waduk_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waduk_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waduk_2.addFeatures(features_Waduk_2);
var lyr_Waduk_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Waduk_2, 
                style: style_Waduk_2,
                popuplayertitle: "Waduk",
                interactive: true,
                title: '<img src="styles/legend/Waduk_2.png" /> Waduk'
            });
var format_Danau_3 = new ol.format.GeoJSON();
var features_Danau_3 = format_Danau_3.readFeatures(json_Danau_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Danau_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Danau_3.addFeatures(features_Danau_3);
var lyr_Danau_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Danau_3, 
                style: style_Danau_3,
                popuplayertitle: "Danau",
                interactive: true,
                title: '<img src="styles/legend/Danau_3.png" /> Danau'
            });
var format_Rawa_4 = new ol.format.GeoJSON();
var features_Rawa_4 = format_Rawa_4.readFeatures(json_Rawa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rawa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rawa_4.addFeatures(features_Rawa_4);
var lyr_Rawa_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rawa_4, 
                style: style_Rawa_4,
                popuplayertitle: "Rawa",
                interactive: true,
                title: '<img src="styles/legend/Rawa_4.png" /> Rawa'
            });
var format_Sungai_5 = new ol.format.GeoJSON();
var features_Sungai_5 = format_Sungai_5.readFeatures(json_Sungai_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_5.addFeatures(features_Sungai_5);
var lyr_Sungai_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_5, 
                style: style_Sungai_5,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/Sungai_5.png" /> Sungai'
            });
var format_SPBU_6 = new ol.format.GeoJSON();
var features_SPBU_6 = format_SPBU_6.readFeatures(json_SPBU_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPBU_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPBU_6.addFeatures(features_SPBU_6);
var lyr_SPBU_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SPBU_6, 
                style: style_SPBU_6,
                popuplayertitle: "SPBU",
                interactive: true,
                title: '<img src="styles/legend/SPBU_6.png" /> SPBU'
            });
var format_TerminalBus_7 = new ol.format.GeoJSON();
var features_TerminalBus_7 = format_TerminalBus_7.readFeatures(json_TerminalBus_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerminalBus_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminalBus_7.addFeatures(features_TerminalBus_7);
var lyr_TerminalBus_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TerminalBus_7, 
                style: style_TerminalBus_7,
                popuplayertitle: "Terminal Bus",
                interactive: true,
                title: '<img src="styles/legend/TerminalBus_7.png" /> Terminal Bus'
            });
var format_RumahSakit_8 = new ol.format.GeoJSON();
var features_RumahSakit_8 = format_RumahSakit_8.readFeatures(json_RumahSakit_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakit_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSakit_8.addFeatures(features_RumahSakit_8);
var lyr_RumahSakit_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RumahSakit_8, 
                style: style_RumahSakit_8,
                popuplayertitle: "Rumah Sakit",
                interactive: true,
                title: '<img src="styles/legend/RumahSakit_8.png" /> Rumah Sakit'
            });
var format_Dermaga_9 = new ol.format.GeoJSON();
var features_Dermaga_9 = format_Dermaga_9.readFeatures(json_Dermaga_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dermaga_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dermaga_9.addFeatures(features_Dermaga_9);
var lyr_Dermaga_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dermaga_9, 
                style: style_Dermaga_9,
                popuplayertitle: "Dermaga",
                interactive: true,
                title: '<img src="styles/legend/Dermaga_9.png" /> Dermaga'
            });

lyr_WilayahAdministrasi_0.setVisible(true);lyr_Pemukiman_1.setVisible(true);lyr_Waduk_2.setVisible(true);lyr_Danau_3.setVisible(true);lyr_Rawa_4.setVisible(true);lyr_Sungai_5.setVisible(true);lyr_SPBU_6.setVisible(true);lyr_TerminalBus_7.setVisible(true);lyr_RumahSakit_8.setVisible(true);lyr_Dermaga_9.setVisible(true);
var layersList = [lyr_WilayahAdministrasi_0,lyr_Pemukiman_1,lyr_Waduk_2,lyr_Danau_3,lyr_Rawa_4,lyr_Sungai_5,lyr_SPBU_6,lyr_TerminalBus_7,lyr_RumahSakit_8,lyr_Dermaga_9];
lyr_WilayahAdministrasi_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Pemukiman_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Waduk_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSWDK': 'JNSWDK', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Danau_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Rawa_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TPRAWA': 'TPRAWA', 'TPGNGN': 'TPGNGN', 'TPAIR': 'TPAIR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Sungai_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SPBU_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_TerminalBus_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'KODTRM': 'KODTRM', 'MGTTRM': 'MGTTRM', 'STATRM': 'STATRM', 'KATTRM': 'KATTRM', 'TIPTRM': 'TIPTRM', 'LUAS': 'LUAS', 'THBTRM': 'THBTRM', 'THOTRM': 'THOTRM', 'THSTRM': 'THSTRM', 'KONKON': 'KONKON', 'JLBTRM': 'JLBTRM', 'KEBTRM': 'KEBTRM', 'JLDTRM': 'JLDTRM', 'KEDTRM': 'KEDTRM', 'PARTRM': 'PARTRM', 'KEPTRM': 'KEPTRM', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_RumahSakit_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', });
lyr_Dermaga_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'PMLDRM': 'PMLDRM', 'OPRDRM': 'OPRDRM', 'LGTDRM': 'LGTDRM', 'LBRDRM': 'LBRDRM', 'LUAS': 'LUAS', 'KDLDRM': 'KDLDRM', 'KSTDRM': 'KSTDRM', 'STRDRM': 'STRDRM', 'REMARK': 'REMARK', 'FGSDRM': 'FGSDRM', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_WilayahAdministrasi_0.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Pemukiman_1.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Waduk_2.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSWDK': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Danau_3.set('fieldImages', {'NAMOBJ': '', 'OTODAN': '', 'FCODE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'VOLTAP': '', 'DTA': '', 'SEDIMN': '', 'VLCSDN': '', 'QUAAR': '', 'CRH': '', 'KPTS': '', 'NAMWS': '', 'NAMDAS': '', 'LOKASI': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Rawa_4.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'TPRAWA': '', 'TPGNGN': '', 'TPAIR': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Sungai_5.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_SPBU_6.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_TerminalBus_7.set('fieldImages', {'NAMOBJ': '', 'KODTRM': '', 'MGTTRM': '', 'STATRM': '', 'KATTRM': '', 'TIPTRM': '', 'LUAS': '', 'THBTRM': '', 'THOTRM': '', 'THSTRM': '', 'KONKON': '', 'JLBTRM': '', 'KEBTRM': '', 'JLDTRM': '', 'KEDTRM': '', 'PARTRM': '', 'KEPTRM': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_RumahSakit_8.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'TIPRST': '', 'JPLYRS': '', 'ALAMAT': '', });
lyr_Dermaga_9.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'PMLDRM': '', 'OPRDRM': '', 'LGTDRM': '', 'LBRDRM': '', 'LUAS': '', 'KDLDRM': '', 'KSTDRM': '', 'STRDRM': '', 'REMARK': '', 'FGSDRM': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_WilayahAdministrasi_0.set('fieldLabels', {'KDPPUM': 'inline label - visible with data', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Pemukiman_1.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Waduk_2.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSWDK': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Danau_3.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'OTODAN': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'VOLTAP': 'no label', 'DTA': 'no label', 'SEDIMN': 'no label', 'VLCSDN': 'no label', 'QUAAR': 'no label', 'CRH': 'no label', 'KPTS': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'LOKASI': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Rawa_4.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TPRAWA': 'no label', 'TPGNGN': 'no label', 'TPAIR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Sungai_5.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SPBU_6.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_TerminalBus_7.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'KODTRM': 'no label', 'MGTTRM': 'no label', 'STATRM': 'no label', 'KATTRM': 'no label', 'TIPTRM': 'no label', 'LUAS': 'no label', 'THBTRM': 'no label', 'THOTRM': 'no label', 'THSTRM': 'no label', 'KONKON': 'no label', 'JLBTRM': 'no label', 'KEBTRM': 'no label', 'JLDTRM': 'no label', 'KEDTRM': 'no label', 'PARTRM': 'no label', 'KEPTRM': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_RumahSakit_8.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', });
lyr_Dermaga_9.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'PMLDRM': 'no label', 'OPRDRM': 'no label', 'LGTDRM': 'no label', 'LBRDRM': 'no label', 'LUAS': 'no label', 'KDLDRM': 'no label', 'KSTDRM': 'no label', 'STRDRM': 'no label', 'REMARK': 'no label', 'FGSDRM': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_Dermaga_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});