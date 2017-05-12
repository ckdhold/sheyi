/**
@author binbin.yin
@param province_id 省级下拉框id
@param city_id     市级下拉框id
@param area_id     区县级下拉框id
@param defaultProvince 默认选中的省（可选）
@param defaultCity     默认选中的市（可选）
@param defaultArea     默认选中的区域（可选）
*/
(function($) {
	$.address_b=function(province_id, city_id, area_id, defaultProvince, defaultCity, defaultArea){
		var province=$('#'+province_id),city=$('#'+city_id),area=$('#'+area_id),province_opt='';
		$.address_b.setOption(province,$.address_b.list,defaultProvince);
		province.change(function(){
			var provinceIndex=$.address_b.getIndex(province);
			$.address_b.setOption(city,$.address_b.list[provinceIndex].c,defaultCity);
			$.address_b.setOption(area,$.address_b.list[provinceIndex].c[$.address_b.getIndex(city)].a,defaultArea);
		});
		var provinceIndex=$.address_b.getIndex(province);
		$.address_b.setOption(city,$.address_b.list[provinceIndex].c,defaultCity);
		city.change(function(){
			$.address_b.setOption(area,$.address_b.list[$.address_b.getIndex(province)].c[$.address_b.getIndex(city)].a,defaultArea);
		});
		$.address_b.setOption(area,$.address_b.list[provinceIndex].c[$.address_b.getIndex(city)].a,defaultArea);
	};
	$.address_b.getIndex=function(dom){return parseInt(dom.find('option:selected').attr('index'));};
	$.address_b.setOption=function(dom,obj,str){
		var opt='';
		$.each(obj,function(i,v){
			var text='object'==typeof v ? v.n : v;
			var selected = 'undefined'==typeof str || text!= str ? '' : ' selected';
			opt+='<option index="'+i+'" value="'+text+'"'+selected+'>'+text+'</option>';
		});
		dom.html(opt);
	}

	$.address_b.list=[{"n":"","c":[{"n":"","a":[]}]},{"n":"上海","c":[{"n":"选择城市","a":["选择区县"]},{"n":"上海市","a":["选择区县","黄浦区","徐汇区","长宁区","静安区","普陀区","闸北区","虹口区","杨浦区","闵行区","宝山区","嘉定区","浦东新区","金山区","松江区","青浦区","南汇区","奉贤区","崇明县"]}]},{"n":"北京","c":[{"n":"选择城市","a":["选择区县"]},{"n":"北京市","a":["选择区县","东城区","西城区","崇文区","宣武区","朝阳区","丰台区","石景山区","海淀区","门头沟区","房山区","通州区","顺义区","昌平区","大兴区"]}]},{"n":"江苏","c":[{"n":"选择城市","a":["选择区县"]},{"n":"南京市","a":["选择区县","玄武区","白下区","秦淮区","建邺区","鼓楼区","下关区","浦口区","栖霞区","雨花台区","江宁区","六合区","溧水县","高淳县"]},{"n":"无锡市","a":["选择区县","崇安区","南长区","新区","北塘区","锡山区","惠山区","滨湖区","江阴市","宜兴市","梁溪区"]},{"n":"徐州市","a":["选择区县","鼓楼区","云龙区","九里区","贾汪区","泉山区","丰县","沛县","铜山区","睢宁县","新沂市","邳州市"]},{"n":"常州市","a":["选择区县","天宁区","钟楼区","戚墅堰区","新北区","武进区","溧阳市","金坛市"]},{"n":"苏州市","a":["选择区县","姑苏区","沧浪区","平江区","工业园区","高新区","金阊区","虎丘区","吴中区","相城区","常熟市","张家港市","昆山市","吴江市","太仓市"]},{"n":"南通市","a":["选择区县","崇川区","港闸区","海安县","如东县","启东市","如皋市","通州市","海门市","南通经济技术开发区"]},{"n":"连云港市","a":["选择区县","连云区","新浦区","海州区","赣榆县","东海县","灌云县","灌南县"]},{"n":"淮安市","a":["选择区县","清河区","楚州区","淮阴区","清浦区","涟水县","洪泽县","盱眙县","金湖县"]},{"n":"盐城市","a":["选择区县","亭湖区","盐都区","响水县","滨海县","阜宁县","射阳县","建湖县","东台市","大丰市"]},{"n":"扬州市","a":["选择区县","广陵区","邗江区","郊区","宝应县","仪征市","高邮市","江都市"]},{"n":"镇江市","a":["选择区县","京口区","润州区","丹徒区","丹阳市","扬中市","句容市"]},{"n":"泰州市","a":["选择区县","海陵区","高港区","兴化市","靖江市","泰兴市","姜堰市"]},{"n":"宿迁市","a":["选择区县","宿城区","宿豫区","沭阳县","泗阳县","泗洪县","洋河新区","湖滨新区","苏州宿迁工业园区","经济开发区"]}]},{"n":"浙江","c":[{"n":"选择城市","a":["选择区县"]},{"n":"杭州市","a":["选择区县","上城区","下城区","江干区","拱墅区","西湖区","滨江区","西溪园区","萧山区","余杭区","桐庐县","淳安县","建德市","富阳市","临安市"]},{"n":"宁波市","a":["选择区县","海曙区","江东区","江北区","北仑区","镇海区","鄞州区","象山县","宁海县","余姚市","慈溪市","奉化市","高新区"]},{"n":"温州市","a":["选择区县","鹿城区","龙湾区","茶山高教园区","瓯海区","洞头县","永嘉县","平阳县","苍南县","文成县","泰顺县","瑞安市","乐清市"]},{"n":"嘉兴市","a":["选择区县","秀城区","秀洲区","嘉善县","南湖区","海盐县","海宁市","平湖市","桐乡市"]},{"n":"湖州市","a":["选择区县","吴兴区","南浔区","德清县","长兴县","安吉县"]},{"n":"绍兴市","a":["选择区县","越城区","绍兴县","新昌县","诸暨市","上虞市","嵊州市","柯桥区"]},{"n":"金华市","a":["选择区县","婺城区","金东区","武义县","浦江县","磐安县","兰溪市","义乌市","东阳市","永康市"]},{"n":"衢州市","a":["选择区县","柯城区","衢江区","常山县","开化县","龙游县","江山市"]},{"n":"舟山市","a":["选择区县","定海区","普陀区","岱山县","嵊泗县"]},{"n":"台州市","a":["选择区县","椒江区","黄岩区","路桥区","玉环县","三门县","天台县","仙居县","温岭市","临海市"]},{"n":"丽水市","a":["选择区县","莲都区","青田县","缙云县","遂昌县","松阳县","云和县","庆元县","景宁畲族自治县","龙泉市"]}]},{"n":"广东","c":[{"n":"选择城市","a":["选择区县"]},{"n":"广州市","a":["选择区县","荔湾区","越秀区","海珠区","天河区","南沙区","白云区","黄埔区","番禺区","花都区","萝岗区","增城市","从化市"]},{"n":"韶关市","a":["选择区县","武江区","浈江区","曲江区","始兴县","仁化县","翁源县","乳源瑶族自治县","新丰县","乐昌市","南雄市"]},{"n":"深圳市","a":["选择区县","罗湖区","福田区","南山区","宝安区","龙岗区","盐田区","光明新区","龙华新区","坪山新区","大鹏新区"]},{"n":"珠海市","a":["选择区县","香洲区","斗门区","金湾区"]},{"n":"汕头市","a":["选择区县","龙湖区","金平区","濠江区","潮阳区","潮南区","澄海区","南澳县"]},{"n":"佛山市","a":["选择区县","禅城区","南海区","顺德区","三水区","高明区"]},{"n":"江门市","a":["选择区县","蓬江区","江海区","新会区","台山市","开平市","鹤山市","恩平市"]},{"n":"湛江市","a":["选择区县","赤坎区","霞山区","坡头区","麻章区","遂溪县","徐闻县","廉江市","雷州市","吴川市"]},{"n":"茂名市","a":["选择区县","茂南区","茂港区","电白县","高州市","化州市","信宜市"]},{"n":"肇庆市","a":["选择区县","端州区","鼎湖区","广宁县","怀集县","封开县","德庆县","高要市","四会市"]},{"n":"惠州市","a":["选择区县","惠城区","惠阳区","博罗县","惠东县","龙门县","大亚湾经济开发区"]},{"n":"梅州市","a":["选择区县","梅江区","梅县","大埔县","丰顺县","五华县","平远县","蕉岭县","兴宁市"]},{"n":"汕尾市","a":["选择区县","城区","海丰县","陆河县","陆丰市"]},{"n":"河源市","a":["选择区县","源城区","紫金县","龙川县","连平县","和平县","东源县"]},{"n":"阳江市","a":["选择区县","江城区","阳西县","阳东县","阳春市"]},{"n":"清远市","a":["选择区县","清城区","佛冈县","阳山县","连山壮族瑶族自治县","连南瑶族自治县","清新县","英德市","连州市"]},{"n":"东莞市","a":["选择区县","东莞市"]},{"n":"中山市","a":["选择区县","中山市"]},{"n":"潮州市","a":["选择区县","湘桥区","潮安县","饶平县","枫溪区"]},{"n":"揭阳市","a":["选择区县","榕城区","揭东县","揭西县","惠来县","普宁市"]},{"n":"云浮市","a":["选择区县","云城区","新兴县","郁南县","云安县","罗定市"]}]},{"n":"四川","c":[{"n":"选择城市","a":["选择区县"]},{"n":"成都市","a":["选择区县","锦江区","青羊区","金牛区","武侯区","成华区","龙泉驿区","青白江区","新都区","高新西区","高新区","温江县","金堂县","双流县","郫县","大邑县","蒲江县","新津县","都江堰市","彭州市","邛崃市","崇州市"]},{"n":"自贡市","a":["选择区县","自流井区","贡井区","大安区","沿滩区","荣县","富顺县"]},{"n":"泸州市","a":["选择区县","江阳区","纳溪区","龙马潭区","泸县","合江县","叙永县","古蔺县"]},{"n":"德阳市","a":["选择区县","旌阳区","中江县","罗江县","广汉市","什邡市","绵竹市"]},{"n":"绵阳市","a":["选择区县","涪城区","游仙区","三台县","盐亭县","安县","梓潼县","北川羌族自治县","平武县","江油市"]},{"n":"广元市","a":["选择区县","市中区","元坝区","朝天区","旺苍县","青川县","剑阁县","苍溪县"]},{"n":"遂宁市","a":["选择区县","船山区","安居区","蓬溪县","射洪县","大英县"]},{"n":"内江市","a":["选择区县","市中区","东兴区","威远县","资中县","隆昌县"]},{"n":"乐山市","a":["选择区县","市中区","沙湾区","五通桥区","金口河区","犍为县","井研县","夹江县","沐川县","峨边彝族自治县","马边彝族自治县","峨眉山市"]},{"n":"南充市","a":["选择区县","顺庆区","高坪区","嘉陵区","南部县","营山县","蓬安县","仪陇县","西充县","阆中市"]},{"n":"眉山市","a":["选择区县","仁寿县","彭山县","洪雅县","丹棱县","青神县"]},{"n":"宜宾市","a":["选择区县","翠屏区","宜宾县","南溪县","江安县","长宁县","高县","珙县","筠连县","兴文县","屏山县"]},{"n":"广安市","a":["选择区县","广安区","岳池县","武胜县","邻水县","华莹市"]},{"n":"达州市","a":["选择区县","通川区","达县","宣汉县","开江县","大竹县","渠县","万源市"]},{"n":"雅安市","a":["选择区县","雨城区","名山县","荥经县","汉源县","石棉县","天全县","芦山县","宝兴县"]},{"n":"巴中市","a":["选择区县","巴州区","通江县","南江县","平昌县"]},{"n":"资阳市","a":["选择区县","雁江区","安岳县","乐至县","简阳市"]}]},{"n":"天津","c":[{"n":"选择城市","a":["选择区县"]},{"n":"天津市","a":["选择区县","和平区","河东区","河西区","南开区","河北区","红桥区","西青区"]}]},{"n":"重庆","c":[{"n":"选择城市","a":["选择区县"]},{"n":"重庆市","a":["选择区县","万州区","涪陵区","渝中区","大渡口区","江北区","沙坪坝区","九龙坡区","南岸区","北碚区","渝北区","巴南区","黔江区","长寿区","綦江县","潼南县","铜梁县","大足县","荣昌县","璧山县","开县","江津市","合川市","永川市","南川市"]}]},{"n":"河南","c":[{"n":"选择城市","a":["选择区县"]},{"n":"郑州市","a":["选择区县","中原区","二七区","管城回族区","金水区","上街区","邙山区","中牟县","巩义市","荥阳市","新密市","新郑市","登封市"]}]},{"n":"湖北","c":[{"n":"选择城市","a":["选择区县"]},{"n":"武汉市","a":["选择区县","江岸区","江汉区","硚口区","汉阳区","武昌区","青山区","洪山区","东西湖区","汉南区","蔡甸区","江夏区","黄陂区","新洲区"]}]},{"n":"湖南","c":[{"n":"选择城市","a":["选择区县"]},{"n":"长沙市","a":["选择区县","芙蓉区","天心区","岳麓区","开福区","雨花区","长沙县","望城县","宁乡县","浏阳市"]}]},{"n":"河北","c":[{"n":"选择城市","a":["选择区县"]},{"n":"石家庄市","a":["选择区县","长安区","桥东区","桥西区","新华区","井陉矿区","裕华区","井陉县","正定县","栾城县","行唐县","灵寿县","高邑县","深泽县","赞皇县","无极县","平山县","元氏县","赵县","辛集市","藁城市","晋州市","新乐市","鹿泉市","高新技术开发区"]},{"n":"廊坊市","a":["选择区县","广阳区","三河市"]}]},{"n":"安徽","c":[{"n":"选择城市","a":["选择区县"]},{"n":"合肥市","a":["选择区县","瑶海区","庐阳区","蜀山区","包河区","长丰县","肥东县","肥西县","庐江县","政务新区","经济技术开发区"]}]},{"n":"福建","c":[{"n":"选择城市","a":["选择区县"]},{"n":"福州市","a":["选择区县","鼓楼区","台江区","仓山区","马尾区","晋安区","闽侯县","连江县","罗源县","闽清县","永泰县","平潭县","福清市","长乐市"]},{"n":"厦门市","a":["选择区县","思明区","海沧区","湖里区","集美区","同安区","翔安区"]},{"n":"莆田市","a":["选择区县","城厢区","涵江区","荔城区","秀屿区","仙游县"]},{"n":"三明市","a":["选择区县","梅列区","三元区","明溪县","清流县","宁化县","大田县","尤溪县","沙县","将乐县","泰宁县","建宁县","永安市"]},{"n":"泉州市","a":["选择区县","鲤城区","丰泽区","洛江区","泉港区","惠安县","安溪县","永春县","德化县","金门县","石狮市","晋江市","南安市"]},{"n":"漳州市","a":["选择区县","芗城区","龙文区","云霄县","漳浦县","诏安县","长泰县","东山县","南靖县","平和县","华安县","龙海市"]},{"n":"南平市","a":["选择区县","延平区","顺昌县","浦城县","光泽县","松溪县","政和县","邵武市","武夷山市","建瓯市","建阳市"]},{"n":"龙岩市","a":["选择区县","新罗区","长汀县","永定县","上杭县","武平县","连城县","漳平市"]},{"n":"宁德市","a":["选择区县","蕉城区","霞浦县","古田县","屏南县","寿宁县","周宁县","柘荣县","福安市","福鼎市"]}]},{"n":"江西","c":[{"n":"选择城市","a":["选择区县"]},{"n":"南昌市","a":["选择区县","东湖区","西湖区","青云谱区","湾里区","青山湖区","南昌县","新建县","安义县","进贤县"]}]},{"n":"山东","c":[{"n":"选择城市","a":["选择区县"]},{"n":"济南市","a":["选择区县","历下区","市中区","槐荫区","天桥区","历城区","长清区","平阴县","济阳县","商河县","章丘市","高新区"]},{"n":"青岛市","a":["选择区县","市南区","市北区","四方区","黄岛区","崂山区","李沧区","城阳区","胶州市","即墨市","平度市","胶南市","莱西市"]},{"n":"淄博市","a":["选择区县","淄川区","张店区","博山区","临淄区","周村区","桓台县","高青县","沂源县"]},{"n":"枣庄市","a":["选择区县","市中区","薛城区","峄城区","台儿庄区","山亭区","滕州市"]},{"n":"东营市","a":["选择区县","东营区","河口区","垦利县","利津县","广饶县"]},{"n":"烟台市","a":["选择区县","芝罘区","福山区","牟平区","莱山区","长岛县","龙口市","莱阳市","莱州市","蓬莱市","招远市","栖霞市","海阳市"]},{"n":"潍坊市","a":["选择区县","潍城区","寒亭区","坊子区","奎文区","临朐县","昌乐县","青州市","诸城市","寿光市","安丘市","高密市","昌邑市"]},{"n":"济宁市","a":["选择区县","市中区","任城区","微山县","鱼台县","金乡县","嘉祥县","汶上县","泗水县","梁山县","曲阜市","兖州市","邹城市"]},{"n":"泰安市","a":["选择区县","泰山区","岱岳区","宁阳县","东平县","新泰市","肥城市"]},{"n":"威海市","a":["选择区县","环翠区","文登市","荣成市","乳山市"]},{"n":"日照市","a":["选择区县","东港区","岚山区","五莲县","莒县"]},{"n":"莱芜市","a":["选择区县","莱城区","钢城区"]},{"n":"临沂市","a":["选择区县","兰山区","罗庄区","河东区","沂南县","郯城县","沂水县","苍山县","费县","平邑县","莒南县","蒙阴县","临沭县"]},{"n":"德州市","a":["选择区县","德城区","陵县","宁津县","庆云县","临邑县","齐河县","平原县","夏津县","武城县","乐陵市","禹城市"]},{"n":"聊城市","a":["选择区县","东昌府区","阳谷县","莘县","茌平县","东阿县","冠县","高唐县","临清市"]},{"n":"滨州市","a":["选择区县","滨城区","惠民县","阳信县","无棣县","沾化县","博兴县","邹平县"]},{"n":"荷泽市","a":["选择区县","牡丹区","曹县","单县","成武县","巨野县","郓城县","鄄城县","定陶县","东明县"]}]}];
})(jQuery);