//"'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
//" Script Title       : 
//"                      
//" Script Date        : Thu Mar  3 13:31:03 2022
//"                       
//"'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

function addKNM()
{
	var dateNow = new Date();
	
	web.url(
		{
			name : 'roles_3', 
			url : '{privateURL}/private/api/admin/news/roles', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/lk/info', 
			snapshot : 't296.inf', 
			mode : 'HTML'
		}
	);

	web.url(
		{
			name : 'published_8', 
			url : '{privateURL}/private/api/news/published?type=ANNOUNCEMENT&order=published,desc;', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/lk/info', 
			snapshot : 't297.inf', 
			mode : 'HTML'
		}
	);

	web.customRequest(
		{
			name : 'status-info-read_3', 
			url : '{privateURL}/private/api/signature/user/status-info-read', 
			method : 'GET', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/lk/info', 
			snapshot : 't298.inf', 
			mode : 'HTML'
		}
	);
	
	// Список доступных КНО и прокуратур	
	web.regSaveParamJson({
	                       	paramName: 'knoOrganization', 
	                       	queryString: '$.KNO',
	                       	scope: 'Body',
	                       });
	
	web.url(
		{
			name : 'organizations_11', 
			url : '{privateURL}/erknm-catalogs/api/general-info/organizations', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/lk/info', 
			snapshot : 't300.inf', 
			mode : 'HTML'
		}
	);
	
	knoOrganizationJSON = JSON.parse(lr.evalString('{knoOrganization}'));
	knoOrganization = knoOrganizationJSON.find(organization => organization.id === lr.evalString('{knoId}'));
	lr.saveString(JSON.stringify(knoOrganization), 'knoOrganization');

	web.customRequest(
		{
			name : 'check-notification_3', 
			url : '{privateURL}/knm-service/api/knm-plan/check-notification', 
			method : 'GET', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/lk/info', 
			snapshot : 't301.inf', 
			mode : 'HTML', 
			extraRes :  [
				{url : '/private/static/media/add.aa964dd5.svg', referer : '{privateURL}/private/static/css/main.881e09d5.chunk.css'},
				{url : '/private/static/media/delete.6395cd7b.svg', referer : '{privateURL}/private/static/css/main.881e09d5.chunk.css'},
				{url : '/private/static/media/info-italic.27ab16a9.svg', referer : '{privateURL}/private/static/css/main.881e09d5.chunk.css'},
				{url : '/private/static/media/settings.4811642b.svg', referer : '{privateURL}/private/static/css/main.881e09d5.chunk.css'}
			]
		}
	);

	web.customRequest(
		{
			name : 'settings_4', 
			url : '{privateURL}/private/api/settings', 
			method : 'GET', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knms', 
			snapshot : 't302.inf', 
			mode : 'HTML'
		}
	);

	web.url(
		{
			name : 'published_9', 
			url : '{privateURL}/private/api/news/published?type=ANNOUNCEMENT&order=published,desc;', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knms', 
			snapshot : 't303.inf', 
			mode : 'HTML'
		}
	);

	web.customRequest(
		{
			name : 'schedule_4', 
			url : '{privateURL}/private/api/settings/schedule', 
			method : 'GET', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knms', 
			snapshot : 't304.inf', 
			mode : 'HTML'
		}
	);

	web.addHeader('Origin', '{privateURL}');

	web.customRequest(
		{
			name : 'find-indexes_4', 
			url : '{privateURL}/private/api/knm/find-indexes?page=0&size=50&order=erpId%2Casc', 
			method : 'POST', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knms', 
			snapshot : 't305.inf', 
			mode : 'HTML', 
			encType : 'application/json', 
			body : '{\"version\":\"ERP\"}'
		}
	);

	web.url(
		{
			name : 'checklist-answer-types_2', 
			url : '{privateURL}/private/api/catalogs/checklist-answer-types', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't306.inf', 
			mode : 'HTML'
		}
	);

	web.url(
		{
			name : 'knm-address-types_2', 
			url : '{privateURL}/private/api/catalogs/knm-address-types', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't307.inf', 
			mode : 'HTML'
		}
	);

	web.url(
		{
			name : 'knm-document-types_2', 
			url : '{privateURL}/private/api/catalogs/knm-document-types', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't308.inf', 
			mode : 'HTML'
		}
	);

	web.url(
		{
			name : 'knm-delegate-types_2', 
			url : '{privateURL}/private/api/catalogs/knm-delegate-types', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't309.inf', 
			mode : 'HTML'
		}
	);
	
	// Форма КНМ
	web.regSaveParamJson({
	                       	paramName: 'kind', 
	                       	queryString: '$[0]',
	                       	scope: 'Body',
	                       });
	
	web.url(
		{
			name : 'knm-execution-types_2', 
			url : '{privateURL}/private/api/catalogs/knm-execution-types', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't310.inf', 
			mode : 'HTML'
		}
	);
	
	
	var kind = JSON.parse(lr.evalString('{kind}'));
	// var kingName = kind['name'].split('');
	// var kingNameInt = kingName.map(function(r) { return r.charCodeAt() });
	//lr.outputMessage(kind['name'].split(''));
	//lr.outputMessage(data);
	
	web.url(
		{
			name : 'knm-notice-methods_2', 
			url : '{privateURL}/private/api/catalogs/knm-notice-methods', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't311.inf', 
			mode : 'HTML'
		}
	);

	// Уполномоченные на проведение проверки
	web.regSaveParamJson({
	                       	paramName: 'inspectors', 
	                       	queryString: '$',
	                       	scope: 'Body',
	                       });
	
	//fullName: "268014авто ФИО"
    //id: 10343
	//knoOrganizationId: "10000001127"
	//position: "268014авто Должность"
	
	web.url(
		{
			name : 'knm-inspectors_2', 
			url : '{privateURL}/private/api/knm-inspectors?knoId={knoId}', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't312.inf', 
			mode : 'HTML'
		}
	);

	web.url(
		{
			name : 'knm-object-types_2', 
			url : '{privateURL}/private/api/catalogs/knm-object-types', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't313.inf', 
			mode : 'HTML'
		}
	);

	web.url(
		{
			name : 'knm-link-types_2', 
			url : '{privateURL}/private/api/catalogs/knm-link-types', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't314.inf', 
			mode : 'HTML'
		}
	);

	web.url(
		{
			name : 'knm-result-info-types_2', 
			url : '{privateURL}/private/api/catalogs/knm-result-info-types', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't315.inf', 
			mode : 'HTML'
		}
	);

	web.url(
		{
			name : 'knm-inspector-types_2', 
			url : '{privateURL}/private/api/catalogs/knm-inspector-types', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't316.inf', 
			mode : 'HTML'
		}
	);
	
	// Тип субъекта КНМ
	// TODO настроить случайный выбор
	web.regSaveParamJson({
	                       	paramName: 'organizationType', 
	                       	queryString: '$[0]',
	                       	scope: 'Body',
	                       }); // параметр organization.type в json при создании КНМ
	
	web.url(
		{
			name : 'knm-subject-types_2', 
			url : '{privateURL}/private/api/catalogs/knm-subject-types', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't317.inf', 
			mode : 'HTML'
		}
	);
	
	// Вид КНМ
	
	web.regSaveParamJson({
	                       	paramName: 'type', 
	                       	queryString: '$[3]',
	                       	scope: 'Body',
	                     });
	
	web.customRequest(
		{
			name : 'knm-types_2', 
			url : '{privateURL}/private/api/catalogs/knm-types?enabled_248=false', 
			method : 'GET', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't318.inf', 
			mode : 'HTML', 
			encType : 'application/json'
		}
	);

	web.url(
		{
			name : 'knm-violation-types_2', 
			url : '{privateURL}/private/api/catalogs/knm-violation-types', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't319.inf', 
			mode : 'HTML'
		}
	);

	web.url(
		{
			name : 'test-purchase-methods_2', 
			url : '{privateURL}/private/api/catalogs/test-purchase-methods', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't320.inf', 
			mode : 'HTML'
		}
	);

	web.url(
		{
			name : 'risk-categories_2', 
			url : '{privateURL}/private/api/catalogs/risk-categories', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't321.inf', 
			mode : 'HTML'
		}
	);

	web.url(
		{
			name : 'violation-lawsuit-types_2', 
			url : '{privateURL}/private/api/catalogs/violation-lawsuit-types', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't322.inf', 
			mode : 'HTML'
		}
	);

	web.url(
		{
			name : 'published_10', 
			url : '{privateURL}/private/api/news/published?type=ANNOUNCEMENT&order=published,desc;', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't323.inf', 
			mode : 'HTML'
		}
	);

	web.url(
		{
			name : 'organizations_12', 
			url : '{privateURL}/erknm-catalogs/api/general-info/organizations?withDistrict=true', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't324.inf', 
			mode : 'HTML', 
			extraRes :  [
				{url : '/private/static/media/back.70f06ddf.svg', referer : '{privateURL}/private/static/css/main.881e09d5.chunk.css'}
			]
		}
	);

	web.customRequest(
		{
			name : 'knm-plan-reason-change-types_2', 
			url : '{privateURL}/private/api/catalogs/erknm/knm-plan-reason-change-types', 
			method : 'GET', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't325.inf', 
			mode : 'HTML'
		}
	);

	web.url(
		{
			name : 'frequently-used_2', 
			url : '{privateURL}/private/api/catalogs/legal-basis/frequently-used?count=5', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't326.inf', 
			mode : 'HTML'
		}
	);

	web.url(
		{
			name : '1_3', 
			url : '{privateURL}/private/api/catalogs/knm-reject-reason-types/1', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't327.inf', 
			mode : 'HTML'
		}
	);

	// Основания регистрации КНМ
	web.regSaveParamJson({
	                     	paramName: 'reasonsType',
	                       	queryString: '$',
	                       	scope: 'Body',
	                     });
	
	web.customRequest(
		{
			name : '1_4', 
			url : '{privateURL}/private/api/catalogs/knm-reason-types/1', 
			method : 'GET', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't328.inf', 
			mode : 'HTML'
		}
	);
	
	reasonsTypeJSON = JSON.parse(lr.evalString('{reasonsType}'));
	reasonsType = reasonsTypeJSON.find(type => type.digitCode === lr.evalString('{reasonsTypeDigitCode}'));
	lr.saveString(JSON.stringify(reasonsType), 'reasonsType');

	web.url(
		{
			name : 'getFunctionByIdKNO', 
			url : '{privateURL}/erknm-catalogs/api/general-info/functions/{knoId}', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't329.inf', 
			mode : 'HTML'
		}
	);
	
	
	// Вид государственного контроля (надзора)
	
	web.regSaveParamJson({
	                     	paramName: 'supervisionType',
	                       	queryString: '$',
	                       	scope: 'Body',
	                     });
	
	web.url(
		{
			name : '0_2', 
			url : '{privateURL}/private/api/catalogs/knm-supervision-types/by-knm-type-and-subject-types/1/0', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't330.inf', 
			mode : 'HTML', 
			extraRes :  [
				{url : '/private/static/media/chevron-down.f78d5fc1.svg', referer : '{privateURL}/private/static/css/main.881e09d5.chunk.css'},
				{url : '/private/static/media/right-double-arrow.044e469b.svg', referer : '{privateURL}/private/static/css/main.881e09d5.chunk.css'}
			]
		}
	);
	
	supervisionTypeJSON = JSON.parse(lr.evalString('{supervisionType}'));
	
	supervisionType = supervisionTypeJSON.find(name => name.digitCode === lr.evalString('{supervisionTypeDigitCode}'));
	federalLaw = supervisionType.federalLaw;
	lr.saveString(JSON.stringify(supervisionType), 'supervisionType');
	lr.saveString(JSON.stringify(federalLaw), 'federalLaw');
	
	
	web.url(
		{
			name : 'levels_2', 
			url : '{privateURL}/private/api/catalogs/legal-basis/levels', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't331.inf', 
			mode : 'HTML', 
			extraRes :  [
				{url : '/private/static/media/right-arrow.3276ccdb.svg', referer : '{privateURL}/private/static/css/main.881e09d5.chunk.css'}
			]
		}
	);

	web.url(
		{
			name : 'types_2', 
			url : '{privateURL}/private/api/catalogs/legal-basis/types', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't332.inf', 
			mode : 'HTML'
		}
	);

	// Connection ID 2 received buffer WebSocketReceive6
	// Connection ID 3 received buffer WebSocketReceive7

	// Получение данных организации по ИНН
	
	web.regSaveParamJson({
	                       	paramName: 'OGRN', 
	                       	queryString: '$.ogrn',
	                       	scope: 'Body',
	                       });
	
	web.regSaveParamJson({
	                       	paramName: 'organizationName', 
	                       	queryString: '$.orgName',
	                       	scope: 'Body',
	                       });
	
	
	web.regSaveParamJson({
	                       	paramName: 'registrationDate', 
	                       	queryString: '$.dateReg',
	                       	scope: 'Body',
	                       });
	
	web.url(
		{
			name : 'getINN', 
			url : '{privateURL}/private/api/fns/lookup/inn/{INN}', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't333.inf', 
			mode : 'HTML', 
			extraRes :  [
				{url : '/private/static/media/remove.7e6ce6a4.svg', referer : '{privateURL}/private/static/css/main.881e09d5.chunk.css'}
			]
		}
	);

	// Список обязательных требований
	// TODO сделать случайный выбор значения
	web.regSaveParamJson({
	                       	paramName: 'requirementTemplatesId', 
	                       	queryString: '$.list[0].id',
	                       	scope: 'Body',
	                       });

	web.url(
		{
			name : 'requirement-templates_2', 
			url : '{privateURL}/private/api/requirement-templates?needQuestions=true&size=2000', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't334.inf', 
			mode : 'HTML'
		}
	);
	
	web.regSaveParamJson({
	                       	paramName: 'requirementTemplates', 
	                       	queryString: '$',
	                       	scope: 'Body',
	                       });
	
	web.url(
		{
			name : 'getRequirementTemplatesById', 
			url : '{privateURL}/private/api/requirement-templates/{requirementTemplatesId}', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't336.inf', 
			mode : 'HTML'
		}
	);

	web.addAutoHeader('Origin', '{privateURL}');

	// Создание КНМ


	startDate = new Date(dateNow);
	startDate.setDate(startDate.getDate() + 1);
	lr.saveString(startDate.toISOString().split('T')[0], 'startDate');
	
	stopDate = new Date(dateNow);
	stopDate.setDate(stopDate.getDate() + 3);
	lr.saveString(stopDate.toISOString().split('T')[0], 'stopDate');
	
	lr.saveString(dateNow.toISOString(), 'clientTime');
	
	web.regSaveParamJson({
	                       	paramName: 'KNMid', 
	                       	queryString: '$.id',
	                       	scope: 'Body',
	                       });
	
	lr.outputMessage(federalLaw.name.normalize());
	lr.saveString('122', 'inspectionTarget'); // Цели, задачи, предмет КНМ
	lr.saveString('1222', 'atrDocuments'); // номер приказа
	
	dateDocuments = new Date(dateNow);
	dateDocuments.setDate(dateDocuments.getDate() - 1);
	lr.saveString(dateDocuments.toISOString().split('T')[0], 'dateDocuments'); // Дата приказа
	 
	lr.saveString('12345', 'documentName'); // Правовые основания проведения КНМ (отсутствует в справочнике) -> название документа
	
	lr.saveString('\\xD0\\xBF\\xD0\\xB5\\xD1\\x80\\xD0\\xB5\\xD1\\x87\\xD0\\xB5\\xD0\\xBD\\xD1\\x8C', 'nameEvents'); // Перечень мероприятий по контролю, необходимых для достижения целей и задач проведения КНМ
	
	web.customRequest(
		{
			name : 'knm_2', 
			url : '{privateURL}/knm-service/api/knm', 
			method : 'POST', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't337.inf', 
			mode : 'HTML', 
			encType : 'application/json', 
//			bodyBinary : '{\"id\":null,\"erpId\":null,\"planId\":null,\"planGuid\":null,\"guid\":null,\"status\":null,\"year\":null,\"month\":' + dateNow.getMonth() + ',\"creationDate\":null,\"publicationDate\":null,\"type\":{\"id\":1,\"name\":\"\\xD0\\x92\\xD0\\xBD\\xD0\\xB5\\xD0\\xBF\\xD0\\xBB\\xD0\\xB0\\xD0\\xBD\\xD0\\xBE\\xD0\\xB2\\xD0\\xB0\\xD1\\x8F \\xD0\\xBF\\xD1\\x80\\xD0\\xBE\\xD0\\xB2\\xD0\\xB5\\xD1\\x80\\xD0\\xBA\\xD0\\xB0\",\"code\":\"VP\",\"enabled\":true,\"weight\":1},\"kind\":{\"id\":1,\"name\":\"' + 
//		'\\xD0\\x92\\xD1\\x8B\\xD0\\xB5\\xD0\\xB7\\xD0\\xB4\\xD0\\xBD\\xD0\\xB0\\xD1\\x8F\",\"code\":\"TYPE_I\",\"enabled\":true,\"weight\":1},\"federalLaw\":{\"id\":0,\"name\":\"294 \\xD0\\xA4\\xD0\\x97\",\"code\":\"294\"},\"title\":null,\"testPurchaseMethod\":null,\"testPurchaseDescription\":null,\"supervisionType\":{\"id\":216,\"idBk\":216,\"guid\":\"20191118-1816-4483-4742-000000383432\",\"name\":\"\\xD0\\x92\\xD1\\x8B\\xD0\\xB1\\xD0\\xBE\\xD1\\x80\\xD0\\xBE\\xD1\\x87\\xD0\\xBD\\xD1\\x8B\\xD0\\xB9 ' + 
//		'\\xD0\\xBA\\xD0\\xBE\\xD0\\xBD\\xD1\\x82\\xD1\\x80\\xD0\\xBE\\xD0\\xBB\\xD1\\x8C \\xD0\\xBA\\xD0\\xB0\\xD1\\x87\\xD0\\xB5\\xD1\\x81\\xD1\\x82\\xD0\\xB2\\xD0\\xB0 \\xD0\\xB1\\xD0\\xB8\\xD0\\xBE\\xD0\\xBC\\xD0\\xB5\\xD0\\xB4\\xD0\\xB8\\xD1\\x86\\xD0\\xB8\\xD0\\xBD\\xD1\\x81\\xD0\\xBA\\xD0\\xB8\\xD1\\x85 \\xD0\\xBA\\xD0\\xBB\\xD0\\xB5\\xD1\\x82\\xD0\\xBE\\xD1\\x87\\xD0\\xBD\\xD1\\x8B\\xD1\\x85 \\xD0\\xBF\\xD1\\x80\\xD0\\xBE\\xD0\\xB4\\xD1\\x83\\xD0\\xBA\\xD1\\x82\\xD0\\xBE\\xD0\\xB2.\",\"federalLaw\"' + 
//		':{\"id\":0,\"name\":\"294 \\xD0\\xA4\\xD0\\x97\",\"code\":\"294\"},\"digitCode\":\"1.176\",\"code\":\"SPV_216\",\"enabled\":true},\"startDate\":\"2022-02-24\",\"stopDate\":\"2022-02-25\",\"startDateIsMonth\":null,\"approve\":{\"inspectionTarget\":\"\\xD1\\x86\\xD0\\xB5\\xD0\\xBB\\xD1\\x8C\",\"startDate\":null,\"startDateIsMonth\":null,\"stopDate\":null,\"durationDays\":1,\"durationHours\":null,\"extDurationDays\":null,\"extDurationHours\":null,\"decisionPlace\":null,\"decisionDate\":null,\"' + 
//		'signerFullName\":null,\"signerPosition\":null,\"approved\":false,\"impossibleConductionReason\":null,\"documents\":[{\"id\":null,\"type\":{\"id\":1,\"code\":\"ORDER\"},\"atr\":\"1\",\"date\":\"2022-02-22\",\"main\":null,\"dateCreate\":null}],\"dateCreate\":null,\"streetGuid\":null,\"houseGuid\":null,\"roomGuid\":null,\"steadGuid\":null},\"reasons\":[{\"type\":{\"id\":107,\"name\":\"\\xD0\\x9F\\xD0\\xBE\\xD1\\x81\\xD1\\x82\\xD1\\x83\\xD0\\xBF\\xD0\\xBB\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD0\\xB5 ' + 
//		'\\xD0\\xB2 \\xD0\\xBE\\xD1\\x80\\xD0\\xB3\\xD0\\xB0\\xD0\\xBD \\xD0\\xB3\\xD0\\xBE\\xD1\\x81\\xD1\\x83\\xD0\\xB4\\xD0\\xB0\\xD1\\x80\\xD1\\x81\\xD1\\x82\\xD0\\xB2\\xD0\\xB5\\xD0\\xBD\\xD0\\xBD\\xD0\\xBE\\xD0\\xB3\\xD0\\xBE \\xD0\\xBA\\xD0\\xBE\\xD0\\xBD\\xD1\\x82\\xD1\\x80\\xD0\\xBE\\xD0\\xBB\\xD1\\x8F (\\xD0\\xBD\\xD0\\xB0\\xD0\\xB4\\xD0\\xB7\\xD0\\xBE\\xD1\\x80\\xD0\\xB0), ' + 
//		'\\xD0\\xBC\\xD1\\x83\\xD0\\xBD\\xD0\\xB8\\xD1\\x86\\xD0\\xB8\\xD0\\xBF\\xD0\\xB0\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD0\\xBE\\xD0\\xB3\\xD0\\xBE \\xD0\\xBA\\xD0\\xBE\\xD0\\xBD\\xD1\\x82\\xD1\\x80\\xD0\\xBE\\xD0\\xBB\\xD1\\x8F \\xD0\\xB7\\xD0\\xB0\\xD1\\x8F\\xD0\\xB2\\xD0\\xBB\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F \\xD0\\xBE\\xD1\\x82 \\xD0\\xB3\\xD1\\x80\\xD0\\xB0\\xD0\\xB6\\xD0\\xB4\\xD0\\xB0\\xD0\\xBD\\xD0\\xB8\\xD0\\xBD\\xD0\\xB0, ' + 
//		'\\xD0\\xBE\\xD1\\x80\\xD0\\xB3\\xD0\\xB0\\xD0\\xBD\\xD0\\xB8\\xD0\\xB7\\xD0\\xB0\\xD1\\x86\\xD0\\xB8\\xD0\\xB8 \\xD0\\xBE \\xD0\\xBF\\xD1\\x80\\xD0\\xB5\\xD0\\xB4\\xD0\\xBE\\xD1\\x81\\xD1\\x82\\xD0\\xB0\\xD0\\xB2\\xD0\\xBB\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD0\\xB8 \\xD0\\xBF\\xD1\\x80\\xD0\\xB0\\xD0\\xB2\\xD0\\xBE\\xD0\\xB2\\xD0\\xBE\\xD0\\xB3\\xD0\\xBE \\xD1\\x81\\xD1\\x82\\xD0\\xB0\\xD1\\x82\\xD1\\x83\\xD1\\x81\\xD0\\xB0, ' + 
//		'\\xD1\\x81\\xD0\\xBF\\xD0\\xB5\\xD1\\x86\\xD0\\xB8\\xD0\\xB0\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD0\\xBE\\xD0\\xB3\\xD0\\xBE \\xD1\\x80\\xD0\\xB0\\xD0\\xB7\\xD1\\x80\\xD0\\xB5\\xD1\\x88\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F (\\xD0\\xBB\\xD0\\xB8\\xD1\\x86\\xD0\\xB5\\xD0\\xBD\\xD0\\xB7\\xD0\\xB8\\xD0\\xB8) \\xD0\\xBD\\xD0\\xB0 \\xD0\\xBF\\xD1\\x80\\xD0\\xB0\\xD0\\xB2\\xD0\\xBE ' + 
//		'\\xD0\\xBE\\xD1\\x81\\xD1\\x83\\xD1\\x89\\xD0\\xB5\\xD1\\x81\\xD1\\x82\\xD0\\xB2\\xD0\\xBB\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F \\xD0\\xBE\\xD1\\x82\\xD0\\xB4\\xD0\\xB5\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD1\\x8B\\xD1\\x85 \\xD0\\xB2\\xD0\\xB8\\xD0\\xB4\\xD0\\xBE\\xD0\\xB2 \\xD0\\xB4\\xD0\\xB5\\xD1\\x8F\\xD1\\x82\\xD0\\xB5\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD0\\xBE\\xD1\\x81\\xD1\\x82\\xD0\\xB8 \\xD0\\xB8\\xD0\\xBB\\xD0\\xB8 ' + 
//		'\\xD1\\x80\\xD0\\xB0\\xD0\\xB7\\xD1\\x80\\xD0\\xB5\\xD1\\x88\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F (\\xD1\\x81\\xD0\\xBE\\xD0\\xB3\\xD0\\xBB\\xD0\\xB0\\xD1\\x81\\xD0\\xBE\\xD0\\xB2\\xD0\\xB0\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F) \\xD0\\xBD\\xD0\\xB0 \\xD0\\xBE\\xD1\\x81\\xD1\\x83\\xD1\\x89\\xD0\\xB5\\xD1\\x81\\xD1\\x82\\xD0\\xB2\\xD0\\xBB\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD0\\xB5 \\xD0\\xB8\\xD0\\xBD\\xD1\\x8B\\xD1\\x85 ' + 
//		'\\xD1\\x8E\\xD1\\x80\\xD0\\xB8\\xD0\\xB4\\xD0\\xB8\\xD1\\x87\\xD0\\xB5\\xD1\\x81\\xD0\\xBA\\xD0\\xB8 \\xD0\\xB7\\xD0\\xBD\\xD0\\xB0\\xD1\\x87\\xD0\\xB8\\xD0\\xBC\\xD1\\x8B\\xD1\\x85 \\xD0\\xB4\\xD0\\xB5\\xD0\\xB9\\xD1\\x81\\xD1\\x82\\xD0\\xB2\\xD0\\xB8\\xD0\\xB9, \\xD0\\xB5\\xD1\\x81\\xD0\\xBB\\xD0\\xB8 \\xD0\\xBF\\xD1\\x80\\xD0\\xBE\\xD0\\xB2\\xD0\\xB5\\xD0\\xB4\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD0\\xB5 ' + 
//		'\\xD1\\x81\\xD0\\xBE\\xD0\\xBE\\xD1\\x82\\xD0\\xB2\\xD0\\xB5\\xD1\\x82\\xD1\\x81\\xD1\\x82\\xD0\\xB2\\xD1\\x83\\xD1\\x8E\\xD1\\x89\\xD0\\xB5\\xD0\\xB9 \\xD0\\xB2\\xD0\\xBD\\xD0\\xB5\\xD0\\xBF\\xD0\\xBB\\xD0\\xB0\\xD0\\xBD\\xD0\\xBE\\xD0\\xB2\\xD0\\xBE\\xD0\\xB9 \\xD0\\xBF\\xD1\\x80\\xD0\\xBE\\xD0\\xB2\\xD0\\xB5\\xD1\\x80\\xD0\\xBA\\xD0\\xB8 \\xD0\\xB3\\xD1\\x80\\xD0\\xB0\\xD0\\xB6\\xD0\\xB4\\xD0\\xB0\\xD0\\xBD\\xD0\\xB8\\xD0\\xBD\\xD0\\xB0, ' + 
//		'\\xD0\\xBE\\xD1\\x80\\xD0\\xB3\\xD0\\xB0\\xD0\\xBD\\xD0\\xB8\\xD0\\xB7\\xD0\\xB0\\xD1\\x86\\xD0\\xB8\\xD0\\xB8 \\xD0\\xBF\\xD1\\x80\\xD0\\xB5\\xD0\\xB4\\xD1\\x83\\xD1\\x81\\xD0\\xBC\\xD0\\xBE\\xD1\\x82\\xD1\\x80\\xD0\\xB5\\xD0\\xBD\\xD0\\xBE \\xD0\\xBF\\xD1\\x80\\xD0\\xB0\\xD0\\xB2\\xD0\\xB8\\xD0\\xBB\\xD0\\xB0\\xD0\\xBC\\xD0\\xB8 \\xD0\\xBF\\xD1\\x80\\xD0\\xB5\\xD0\\xB4\\xD0\\xBE\\xD1\\x81\\xD1\\x82\\xD0\\xB0\\xD0\\xB2\\xD0\\xBB\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F ' + 
//		'\\xD0\\xBF\\xD1\\x80\\xD0\\xB0\\xD0\\xB2\\xD0\\xBE\\xD0\\xB2\\xD0\\xBE\\xD0\\xB3\\xD0\\xBE \\xD1\\x81\\xD1\\x82\\xD0\\xB0\\xD1\\x82\\xD1\\x83\\xD1\\x81\\xD0\\xB0, \\xD1\\x81\\xD0\\xBF\\xD0\\xB5\\xD1\\x86\\xD0\\xB8\\xD0\\xB0\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD0\\xBE\\xD0\\xB3\\xD0\\xBE \\xD1\\x80\\xD0\\xB0\\xD0\\xB7\\xD1\\x80\\xD0\\xB5\\xD1\\x88\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F (\\xD0\\xBB\\xD0\\xB8\\xD1\\x86\\xD0\\xB5\\xD0\\xBD\\xD0\\xB7\\xD0\\xB8\\xD0\\xB8), ' + 
//		'\\xD0\\xB2\\xD1\\x8B\\xD0\\xB4\\xD0\\xB0\\xD1\\x87\\xD0\\xB8 \\xD1\\x80\\xD0\\xB0\\xD0\\xB7\\xD1\\x80\\xD0\\xB5\\xD1\\x88\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F (\\xD1\\x81\\xD0\\xBE\\xD0\\xB3\\xD0\\xBB\\xD0\\xB0\\xD1\\x81\\xD0\\xBE\\xD0\\xB2\\xD0\\xB0\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F).\",\"code\":\"RSN_VP_CVII\",\"digitCode\":\"1.2.7\",\"hasText\":false,\"indicatorRiskRequired\":false,\"approveRequired\":false,\"dateRequired\":false,\"isDisabled\":false},\"date\":null,\"approveRequired\":false}],\"' + 
//		'legalBases\":[{\"documentName\":\"1\"}],\"events\":[{\"listId\":\"5832f7f8-e508-4577-9355-309c9c9949ed\",\"name\":\"\\xD0\\xBF\\xD0\\xB5\\xD1\\x80\\xD0\\xB5\\xD1\\x87\\xD0\\xB5\\xD0\\xBD\\xD1\\x8C\",\"startDate\":null,\"stopDate\":null}],\"signStatus\":null,\"knoOrganization\":{\"organization\":{\"id\":\"{knoId}\",\"fullName\":\"\\xD0\\xA4\\xD0\\xB5\\xD0\\xB4\\xD0\\xB5\\xD1\\x80\\xD0\\xB0\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD0\\xB0\\xD1\\x8F ' + 
//		'\\xD1\\x81\\xD0\\xBB\\xD1\\x83\\xD0\\xB6\\xD0\\xB1\\xD0\\xB0 \\xD0\\xBF\\xD0\\xBE \\xD0\\xBD\\xD0\\xB0\\xD0\\xB4\\xD0\\xB7\\xD0\\xBE\\xD1\\x80\\xD1\\x83 \\xD0\\xB2 \\xD1\\x81\\xD1\\x84\\xD0\\xB5\\xD1\\x80\\xD0\\xB5 \\xD0\\xB7\\xD0\\xB4\\xD1\\x80\\xD0\\xB0\\xD0\\xB2\\xD0\\xBE\\xD0\\xBE\\xD1\\x85\\xD1\\x80\\xD0\\xB0\\xD0\\xBD\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F\"},\"collaboratingKnoName\":null,\"collaboratingOrganizations\":null,\"functions\":null},\"inspectors\":[{\"fullName\":\"' + 
//		'268014\\xD0\\xB0\\xD0\\xB2\\xD1\\x82\\xD0\\xBE \\xD0\\xA4\\xD0\\x98\\xD0\\x9E\",\"position\":\"268014\\xD0\\xB0\\xD0\\xB2\\xD1\\x82\\xD0\\xBE \\xD0\\x94\\xD0\\xBE\\xD0\\xBB\\xD0\\xB6\\xD0\\xBD\\xD0\\xBE\\xD1\\x81\\xD1\\x82\\xD1\\x8C\",\"type\":{\"id\":1,\"name\":\"\\xD0\\x9F\\xD1\\x80\\xD0\\xBE\\xD0\\xB2\\xD0\\xB5\\xD1\\x80\\xD1\\x8F\\xD1\\x8E\\xD1\\x89\\xD0\\xB8\\xD0\\xB9\",\"code\":\"TYPE_I\",\"enabled\":true},\"main\":true}],\"prosecutorOrganization\":{\"id\":\"2\",\"code\":null,\"name\":\"' + 
//		'\\xD0\\x93\\xD0\\xB5\\xD0\\xBD\\xD0\\xB5\\xD1\\x80\\xD0\\xB0\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD0\\xB0\\xD1\\x8F \\xD0\\xBF\\xD1\\x80\\xD0\\xBE\\xD0\\xBA\\xD1\\x83\\xD1\\x80\\xD0\\xB0\\xD1\\x82\\xD1\\x83\\xD1\\x80\\xD0\\xB0 \\xD0\\xA0\\xD0\\xBE\\xD1\\x81\\xD1\\x81\\xD0\\xB8\\xD0\\xB9\\xD1\\x81\\xD0\\xBA\\xD0\\xBE\\xD0\\xB9 \\xD0\\xA4\\xD0\\xB5\\xD0\\xB4\\xD0\\xB5\\xD1\\x80\\xD0\\xB0\\xD1\\x86\\xD0\\xB8\\xD0\\xB8\",\"address\":null,\"contacts\":null,\"federalDistrictId\":null,\"regionId\":null,\"' + 
//		'parentId\":null,\"enabled\":null},\"rejectReasons\":null,\"organization\":{\"inn\":\"{INN}\",\"ogrn\":\"{OGRN}\",\"organizationName\":\"\\xD0\\x9E\\xD0\\x91\\xD0\\xA9\\xD0\\x95\\xD0\\xA1\\xD0\\xA2\\xD0\\x92\\xD0\\x9E \\xD0\\xA1 \\xD0\\x9E\\xD0\\x93\\xD0\\xA0\\xD0\\x90\\xD0\\x9D\\xD0\\x98\\xD0\\xA7\\xD0\\x95\\xD0\\x9D\\xD0\\x9D\\xD0\\x9E\\xD0\\x99 ' + 
//		'\\xD0\\x9E\\xD0\\xA2\\xD0\\x92\\xD0\\x95\\xD0\\xA2\\xD0\\xA1\\xD0\\xA2\\xD0\\x92\\xD0\\x95\\xD0\\x9D\\xD0\\x9D\\xD0\\x9E\\xD0\\xA1\\xD0\\xA2\\xD0\\xAC\\xD0\\xAE \\\"\\xD0\\x94\\xD0\\x9E\\xD0\\x9C \\xD0\\xA1\\xD0\\x95\\xD0\\xA0\\xD0\\x92\\xD0\\x98\\xD0\\xA1\\\"\",\"type\":{\"id\":0,\"name\":\"\\xD0\\xAE\\xD0\\x9B/\\xD0\\x98\\xD0\\x9F\",\"code\":\"UL_IP\",\"federalLaw\":null,\"enabled\":true,\"weight\":0},\"registrationDate\":\"2016-08-09\",\"licenseReasonStartDate\":null,\"licenseReasonKnmEndDate\"' + 
//		':null,\"autocomplete\":true,\"mspCode\":null},\"riskCategory\":null,\"objects\":null,\"noticeMethod\":null,\"noticeDate\":null,\"documents\":null,\"links\":[],\"district\":{\"id\":\"1000000000000001\",\"name\":\"\\xD0\\xA0\\xD0\\x9E\\xD0\\xA1\\xD0\\xA1\\xD0\\x98\\xD0\\xAF - \\xD1\\x81\\xD0\\xBE\\xD1\\x81\\xD1\\x82\\xD0\\xB0\\xD0\\xB2 \\xD1\\x84\\xD0\\xB5\\xD0\\xB4\\xD0\\xB5\\xD1\\x80\\xD0\\xB0\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD1\\x8B\\xD1\\x85 ' + 
//		'\\xD0\\xBE\\xD0\\xBA\\xD1\\x80\\xD1\\x83\\xD0\\xB3\\xD0\\xBE\\xD0\\xB2\",\"center\":null,\"okatoTer\":null,\"okatoKod1\":null,\"okatoRazdel\":null,\"federalRegionCode\":null,\"federalDistrict\":null},\"requirements\":[{\"name\":\"10798\\xD0\\xB0\\xD0\\xB2\\xD1\\x82\\xD0\\xBE \\xD0\\x9D\\xD0\\xB0\\xD0\\xB8\\xD0\\xBC\\xD0\\xB5\\xD0\\xBD\\xD0\\xBE\\xD0\\xB2\\xD0\\xB0\\xD0\\xBD\\xD0\\xB8\\xD0\\xB5\",\"template\":{\"id\":{requirementTemplatesId},\"name\":\"10798\\xD0\\xB0\\xD0\\xB2\\xD1\\x82\\xD0\\xBE ' + 
//		'\\xD0\\x9D\\xD0\\xB0\\xD0\\xB8\\xD0\\xBC\\xD0\\xB5\\xD0\\xBD\\xD0\\xBE\\xD0\\xB2\\xD0\\xB0\\xD0\\xBD\\xD0\\xB8\\xD0\\xB5\",\"byDefault\":false,\"knoOrganizationId\":\"{knoId}\",\"supervisionType\":216,\"requirements\":[{\"guid\":null,\"id\":60904,\"name\":\"10798\\xD0\\xB0\\xD0\\xB2\\xD1\\x82\\xD0\\xBE \\xD0\\x9D\\xD0\\xB0\\xD0\\xB8\\xD0\\xBC\\xD0\\xB5\\xD0\\xBD\\xD0\\xBE\\xD0\\xB2\\xD0\\xB0\\xD0\\xBD\\xD0\\xB8\\xD0\\xB5 \\xD0\\x9D\\xD0\\x9F\\xD0\\x90\",\"props\":\"' + 
//		'10798\\xD0\\xB0\\xD0\\xB2\\xD1\\x82\\xD0\\xBE \\xD0\\xA4\\xD0\\xBE\\xD1\\x80\\xD0\\xBC\\xD1\\x83\\xD0\\xBB\\xD0\\xB8\\xD1\\x80\\xD0\\xBE\\xD0\\xB2\\xD0\\xBA\\xD0\\xB0\",\"number\":\"107981\",\"date\":\"2022-02-17\",\"paragraph\":null,\"part\":null,\"article\":null,\"index\":0}],\"deleted\":false},\"documents\":[{\"guid\":null,\"id\":60904,\"name\":\"10798\\xD0\\xB0\\xD0\\xB2\\xD1\\x82\\xD0\\xBE ' + 
//		'\\xD0\\x9D\\xD0\\xB0\\xD0\\xB8\\xD0\\xBC\\xD0\\xB5\\xD0\\xBD\\xD0\\xBE\\xD0\\xB2\\xD0\\xB0\\xD0\\xBD\\xD0\\xB8\\xD0\\xB5 \\xD0\\x9D\\xD0\\x9F\\xD0\\x90\",\"props\":\"10798\\xD0\\xB0\\xD0\\xB2\\xD1\\x82\\xD0\\xBE \\xD0\\xA4\\xD0\\xBE\\xD1\\x80\\xD0\\xBC\\xD1\\x83\\xD0\\xBB\\xD0\\xB8\\xD1\\x80\\xD0\\xBE\\xD0\\xB2\\xD0\\xBA\\xD0\\xB0\",\"number\":\"107981\",\"date\":\"2022-02-17\",\"paragraph\":null,\"part\":null,\"article\":null,\"index\":0}],\"knoOrganization\":{\"id\":\"{knoId}\",\"fullName\"' + 
//		':\"\\xD0\\xA4\\xD0\\xB5\\xD0\\xB4\\xD0\\xB5\\xD1\\x80\\xD0\\xB0\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD0\\xB0\\xD1\\x8F \\xD1\\x81\\xD0\\xBB\\xD1\\x83\\xD0\\xB6\\xD0\\xB1\\xD0\\xB0 \\xD0\\xBF\\xD0\\xBE \\xD0\\xBD\\xD0\\xB0\\xD0\\xB4\\xD0\\xB7\\xD0\\xBE\\xD1\\x80\\xD1\\x83 \\xD0\\xB2 \\xD1\\x81\\xD1\\x84\\xD0\\xB5\\xD1\\x80\\xD0\\xB5 \\xD0\\xB7\\xD0\\xB4\\xD1\\x80\\xD0\\xB0\\xD0\\xB2\\xD0\\xBE\\xD0\\xBE\\xD1\\x85\\xD1\\x80\\xD0\\xB0\\xD0\\xBD\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F\",\"districtName\"' + 
//		':null,\"districtId\":null,\"byDefault\":true,\"isEnable\":true},\"supervisionType\":{\"id\":216,\"idBk\":216,\"guid\":\"20191118-1816-4483-4742-000000383432\",\"name\":\"\\xD0\\x92\\xD1\\x8B\\xD0\\xB1\\xD0\\xBE\\xD1\\x80\\xD0\\xBE\\xD1\\x87\\xD0\\xBD\\xD1\\x8B\\xD0\\xB9 \\xD0\\xBA\\xD0\\xBE\\xD0\\xBD\\xD1\\x82\\xD1\\x80\\xD0\\xBE\\xD0\\xBB\\xD1\\x8C \\xD0\\xBA\\xD0\\xB0\\xD1\\x87\\xD0\\xB5\\xD1\\x81\\xD1\\x82\\xD0\\xB2\\xD0\\xB0 ' + 
//		'\\xD0\\xB1\\xD0\\xB8\\xD0\\xBE\\xD0\\xBC\\xD0\\xB5\\xD0\\xB4\\xD0\\xB8\\xD1\\x86\\xD0\\xB8\\xD0\\xBD\\xD1\\x81\\xD0\\xBA\\xD0\\xB8\\xD1\\x85 \\xD0\\xBA\\xD0\\xBB\\xD0\\xB5\\xD1\\x82\\xD0\\xBE\\xD1\\x87\\xD0\\xBD\\xD1\\x8B\\xD1\\x85 \\xD0\\xBF\\xD1\\x80\\xD0\\xBE\\xD0\\xB4\\xD1\\x83\\xD0\\xBA\\xD1\\x82\\xD0\\xBE\\xD0\\xB2.\",\"federalLaw\":{\"id\":0,\"name\":\"294 \\xD0\\xA4\\xD0\\x97\",\"code\":\"294\"},\"digitCode\":\"1.176\",\"code\":\"SPV_216\",\"enabled\":true},\"guid\":null}],\"deleted\":null' + 
//		',\"publishedStatus\":null,\"manualPublish\":null,\"published\":null,\"correlationToken\":null,\"createdBy\":null,\"updatedBy\":null,\"created\":null,\"updated\":null,\"note\":null,\"hash\":null,\"signed\":null,\"signatureInfo\":null,\"dateCreate\":null,\"classificationDateCreate\":null,\"publishDateCreate\":null,\"statusDateCreate\":null,\"knmErknm\":null,\"pmErknm\":null,\"version\":\"ERP\",\"clientTime\":\"2022-02-22T14:06:44.311Z\"}'
			bodyBinary : 
				'{\"id\":null,' +
				'\"erpId\":null,' + 
				'\"planId\":null,' +
				'\"planGuid\":null,' +
				'\"guid\":null,' + 
				'\"status\":null,' + 
				'\"year\":' + dateNow.getYear() + ',' + 
				'\"month\":' + dateNow.getMonth() + ',' + 
				'\"creationDate\":null,' + 
				'\"publicationDate\":null,' + 
				'\"type\":{type},' + 
				'\"kind\":{kind},' + 
				'\"federalLaw\":{' + 
					'\"id\":' + federalLaw.id + ',' + 
					'\"name\":\"294 \\xD0\\xA4\\xD0\\x97\",' + 
					'\"code\":\"' + federalLaw.code + '\"},' +
				'\"title\":null,' + 
				'\"testPurchaseMethod\":null,' + 
				'\"testPurchaseDescription\":null,' + 
				'\"supervisionType\":{' + 
					'\"id\":' + supervisionType.id + 
					',\"idBk\":216,\"guid\":\"20191118-1816-4483-4742-000000383432\",\"name\":\"\\xD0\\x92\\xD1\\x8B\\xD0\\xB1\\xD0\\xBE\\xD1\\x80\\xD0\\xBE\\xD1\\x87\\xD0\\xBD\\xD1\\x8B\\xD0\\xB9 ' +
		'\\xD0\\xBA\\xD0\\xBE\\xD0\\xBD\\xD1\\x82\\xD1\\x80\\xD0\\xBE\\xD0\\xBB\\xD1\\x8C \\xD0\\xBA\\xD0\\xB0\\xD1\\x87\\xD0\\xB5\\xD1\\x81\\xD1\\x82\\xD0\\xB2\\xD0\\xB0 \\xD0\\xB1\\xD0\\xB8\\xD0\\xBE\\xD0\\xBC\\xD0\\xB5\\xD0\\xB4\\xD0\\xB8\\xD1\\x86\\xD0\\xB8\\xD0\\xBD\\xD1\\x81\\xD0\\xBA\\xD0\\xB8\\xD1\\x85 \\xD0\\xBA\\xD0\\xBB\\xD0\\xB5\\xD1\\x82\\xD0\\xBE\\xD1\\x87\\xD0\\xBD\\xD1\\x8B\\xD1\\x85 \\xD0\\xBF\\xD1\\x80\\xD0\\xBE\\xD0\\xB4\\xD1\\x83\\xD0\\xBA\\xD1\\x82\\xD0\\xBE\\xD0\\xB2.\",\"federalLaw\"' + 
		':{\"id\":0,\"name\":\"294 \\xD0\\xA4\\xD0\\x97\",\"code\":\"294\"},\"digitCode\":\"1.176\",\"code\":\"SPV_216\",\"enabled\":true},'+ 
				'\"startDate\":\"{startDate}\",' + 
				'\"stopDate\":\"{stopDate}\",' + 
				'\"startDateIsMonth\":null,' + 
				'\"approve\":{' + 
					'\"inspectionTarget\":\"{inspectionTarget}",' +  // Цели, задачи, предмет КНМ
					'\"startDate\":null,' + 
					'\"startDateIsMonth\":null,' + 
					'\"stopDate\":null,' + 
					'\"durationDays\":1,' + 
					'\"durationHours\":null,' + 
					'\"extDurationDays\":null,' + 
					'\"extDurationHours\":null,' + 
					'\"decisionPlace\":null,' + 
					'\"decisionDate\":null,\"' +
					'signerFullName\":null,' + 
					'\"signerPosition\":null,' + 
					'\"approved\":false,' + 
					'\"impossibleConductionReason\":null,' + 
					'\"documents\":[{' + 
						'\"id\":null,' + 
						'\"type\":{\"id\":1,\"code\":\"ORDER\"},' + 
						'\"atr\":\"{atrDocuments}\",' + 
						'\"date\":\"{dateDocuments}\",' + 
						'\"main\":null,' + 
						'\"dateCreate\":null}],' + 
					'\"dateCreate\":null,' + 
					'\"streetGuid\":null,' + 
					'\"houseGuid\":null,' + 
					'\"roomGuid\":null,' + 
					'\"steadGuid\":null},' + 
				'\"reasons\":[{' + 
					'\"type\":	{\"id\":107,\"name\":\"\\xD0\\x9F\\xD0\\xBE\\xD1\\x81\\xD1\\x82\\xD1\\x83\\xD0\\xBF\\xD0\\xBB\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD0\\xB5 ' +
		'\\xD0\\xB2 \\xD0\\xBE\\xD1\\x80\\xD0\\xB3\\xD0\\xB0\\xD0\\xBD \\xD0\\xB3\\xD0\\xBE\\xD1\\x81\\xD1\\x83\\xD0\\xB4\\xD0\\xB0\\xD1\\x80\\xD1\\x81\\xD1\\x82\\xD0\\xB2\\xD0\\xB5\\xD0\\xBD\\xD0\\xBD\\xD0\\xBE\\xD0\\xB3\\xD0\\xBE \\xD0\\xBA\\xD0\\xBE\\xD0\\xBD\\xD1\\x82\\xD1\\x80\\xD0\\xBE\\xD0\\xBB\\xD1\\x8F (\\xD0\\xBD\\xD0\\xB0\\xD0\\xB4\\xD0\\xB7\\xD0\\xBE\\xD1\\x80\\xD0\\xB0), ' + 
		'\\xD0\\xBC\\xD1\\x83\\xD0\\xBD\\xD0\\xB8\\xD1\\x86\\xD0\\xB8\\xD0\\xBF\\xD0\\xB0\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD0\\xBE\\xD0\\xB3\\xD0\\xBE \\xD0\\xBA\\xD0\\xBE\\xD0\\xBD\\xD1\\x82\\xD1\\x80\\xD0\\xBE\\xD0\\xBB\\xD1\\x8F \\xD0\\xB7\\xD0\\xB0\\xD1\\x8F\\xD0\\xB2\\xD0\\xBB\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F \\xD0\\xBE\\xD1\\x82 \\xD0\\xB3\\xD1\\x80\\xD0\\xB0\\xD0\\xB6\\xD0\\xB4\\xD0\\xB0\\xD0\\xBD\\xD0\\xB8\\xD0\\xBD\\xD0\\xB0, ' + 
		'\\xD0\\xBE\\xD1\\x80\\xD0\\xB3\\xD0\\xB0\\xD0\\xBD\\xD0\\xB8\\xD0\\xB7\\xD0\\xB0\\xD1\\x86\\xD0\\xB8\\xD0\\xB8 \\xD0\\xBE \\xD0\\xBF\\xD1\\x80\\xD0\\xB5\\xD0\\xB4\\xD0\\xBE\\xD1\\x81\\xD1\\x82\\xD0\\xB0\\xD0\\xB2\\xD0\\xBB\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD0\\xB8 \\xD0\\xBF\\xD1\\x80\\xD0\\xB0\\xD0\\xB2\\xD0\\xBE\\xD0\\xB2\\xD0\\xBE\\xD0\\xB3\\xD0\\xBE \\xD1\\x81\\xD1\\x82\\xD0\\xB0\\xD1\\x82\\xD1\\x83\\xD1\\x81\\xD0\\xB0, ' + 
		'\\xD1\\x81\\xD0\\xBF\\xD0\\xB5\\xD1\\x86\\xD0\\xB8\\xD0\\xB0\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD0\\xBE\\xD0\\xB3\\xD0\\xBE \\xD1\\x80\\xD0\\xB0\\xD0\\xB7\\xD1\\x80\\xD0\\xB5\\xD1\\x88\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F (\\xD0\\xBB\\xD0\\xB8\\xD1\\x86\\xD0\\xB5\\xD0\\xBD\\xD0\\xB7\\xD0\\xB8\\xD0\\xB8) \\xD0\\xBD\\xD0\\xB0 \\xD0\\xBF\\xD1\\x80\\xD0\\xB0\\xD0\\xB2\\xD0\\xBE ' + 
		'\\xD0\\xBE\\xD1\\x81\\xD1\\x83\\xD1\\x89\\xD0\\xB5\\xD1\\x81\\xD1\\x82\\xD0\\xB2\\xD0\\xBB\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F \\xD0\\xBE\\xD1\\x82\\xD0\\xB4\\xD0\\xB5\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD1\\x8B\\xD1\\x85 \\xD0\\xB2\\xD0\\xB8\\xD0\\xB4\\xD0\\xBE\\xD0\\xB2 \\xD0\\xB4\\xD0\\xB5\\xD1\\x8F\\xD1\\x82\\xD0\\xB5\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD0\\xBE\\xD1\\x81\\xD1\\x82\\xD0\\xB8 \\xD0\\xB8\\xD0\\xBB\\xD0\\xB8 ' + 
		'\\xD1\\x80\\xD0\\xB0\\xD0\\xB7\\xD1\\x80\\xD0\\xB5\\xD1\\x88\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F (\\xD1\\x81\\xD0\\xBE\\xD0\\xB3\\xD0\\xBB\\xD0\\xB0\\xD1\\x81\\xD0\\xBE\\xD0\\xB2\\xD0\\xB0\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F) \\xD0\\xBD\\xD0\\xB0 \\xD0\\xBE\\xD1\\x81\\xD1\\x83\\xD1\\x89\\xD0\\xB5\\xD1\\x81\\xD1\\x82\\xD0\\xB2\\xD0\\xBB\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD0\\xB5 \\xD0\\xB8\\xD0\\xBD\\xD1\\x8B\\xD1\\x85 ' + 
		'\\xD1\\x8E\\xD1\\x80\\xD0\\xB8\\xD0\\xB4\\xD0\\xB8\\xD1\\x87\\xD0\\xB5\\xD1\\x81\\xD0\\xBA\\xD0\\xB8 \\xD0\\xB7\\xD0\\xBD\\xD0\\xB0\\xD1\\x87\\xD0\\xB8\\xD0\\xBC\\xD1\\x8B\\xD1\\x85 \\xD0\\xB4\\xD0\\xB5\\xD0\\xB9\\xD1\\x81\\xD1\\x82\\xD0\\xB2\\xD0\\xB8\\xD0\\xB9, \\xD0\\xB5\\xD1\\x81\\xD0\\xBB\\xD0\\xB8 \\xD0\\xBF\\xD1\\x80\\xD0\\xBE\\xD0\\xB2\\xD0\\xB5\\xD0\\xB4\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD0\\xB5 ' + 
		'\\xD1\\x81\\xD0\\xBE\\xD0\\xBE\\xD1\\x82\\xD0\\xB2\\xD0\\xB5\\xD1\\x82\\xD1\\x81\\xD1\\x82\\xD0\\xB2\\xD1\\x83\\xD1\\x8E\\xD1\\x89\\xD0\\xB5\\xD0\\xB9 \\xD0\\xB2\\xD0\\xBD\\xD0\\xB5\\xD0\\xBF\\xD0\\xBB\\xD0\\xB0\\xD0\\xBD\\xD0\\xBE\\xD0\\xB2\\xD0\\xBE\\xD0\\xB9 \\xD0\\xBF\\xD1\\x80\\xD0\\xBE\\xD0\\xB2\\xD0\\xB5\\xD1\\x80\\xD0\\xBA\\xD0\\xB8 \\xD0\\xB3\\xD1\\x80\\xD0\\xB0\\xD0\\xB6\\xD0\\xB4\\xD0\\xB0\\xD0\\xBD\\xD0\\xB8\\xD0\\xBD\\xD0\\xB0, ' + 
		'\\xD0\\xBE\\xD1\\x80\\xD0\\xB3\\xD0\\xB0\\xD0\\xBD\\xD0\\xB8\\xD0\\xB7\\xD0\\xB0\\xD1\\x86\\xD0\\xB8\\xD0\\xB8 \\xD0\\xBF\\xD1\\x80\\xD0\\xB5\\xD0\\xB4\\xD1\\x83\\xD1\\x81\\xD0\\xBC\\xD0\\xBE\\xD1\\x82\\xD1\\x80\\xD0\\xB5\\xD0\\xBD\\xD0\\xBE \\xD0\\xBF\\xD1\\x80\\xD0\\xB0\\xD0\\xB2\\xD0\\xB8\\xD0\\xBB\\xD0\\xB0\\xD0\\xBC\\xD0\\xB8 \\xD0\\xBF\\xD1\\x80\\xD0\\xB5\\xD0\\xB4\\xD0\\xBE\\xD1\\x81\\xD1\\x82\\xD0\\xB0\\xD0\\xB2\\xD0\\xBB\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F ' + 
		'\\xD0\\xBF\\xD1\\x80\\xD0\\xB0\\xD0\\xB2\\xD0\\xBE\\xD0\\xB2\\xD0\\xBE\\xD0\\xB3\\xD0\\xBE \\xD1\\x81\\xD1\\x82\\xD0\\xB0\\xD1\\x82\\xD1\\x83\\xD1\\x81\\xD0\\xB0, \\xD1\\x81\\xD0\\xBF\\xD0\\xB5\\xD1\\x86\\xD0\\xB8\\xD0\\xB0\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD0\\xBE\\xD0\\xB3\\xD0\\xBE \\xD1\\x80\\xD0\\xB0\\xD0\\xB7\\xD1\\x80\\xD0\\xB5\\xD1\\x88\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F (\\xD0\\xBB\\xD0\\xB8\\xD1\\x86\\xD0\\xB5\\xD0\\xBD\\xD0\\xB7\\xD0\\xB8\\xD0\\xB8), ' + 
		'\\xD0\\xB2\\xD1\\x8B\\xD0\\xB4\\xD0\\xB0\\xD1\\x87\\xD0\\xB8 \\xD1\\x80\\xD0\\xB0\\xD0\\xB7\\xD1\\x80\\xD0\\xB5\\xD1\\x88\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F (\\xD1\\x81\\xD0\\xBE\\xD0\\xB3\\xD0\\xBB\\xD0\\xB0\\xD1\\x81\\xD0\\xBE\\xD0\\xB2\\xD0\\xB0\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F).\",\"code\":\"RSN_VP_CVII\",\"digitCode\":\"1.2.7\",\"hasText\":false,\"indicatorRiskRequired\":false,\"approveRequired\":false,\"dateRequired\":false,\"isDisabled\":false},' + 
					'\"date\":null,' + 
					'\"approveRequired\":false}],\"' +
				'legalBases\":[{\"documentName\":\"{documentName}\"}],' + 
				// Перечень мероприятий по контролю, необходимых для достижения целей и задач проведения КНМ
				'\"events\":[{' + 
					'\"listId\":\"' + uuidv4() + '\",' + 
					'\"name\":\"{nameEvents}\",' + 
					'\"startDate\":null,' + 
					'\"stopDate\":null}],' + 
				
				'\"signStatus\":null,' + 
				'\"knoOrganization\":{' +
					'\"organization\":{\"id\":\"{knoId}\",\"fullName\":\"\\xD0\\xA4\\xD0\\xB5\\xD0\\xB4\\xD0\\xB5\\xD1\\x80\\xD0\\xB0\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD0\\xB0\\xD1\\x8F ' +
		'\\xD1\\x81\\xD0\\xBB\\xD1\\x83\\xD0\\xB6\\xD0\\xB1\\xD0\\xB0 \\xD0\\xBF\\xD0\\xBE \\xD0\\xBD\\xD0\\xB0\\xD0\\xB4\\xD0\\xB7\\xD0\\xBE\\xD1\\x80\\xD1\\x83 \\xD0\\xB2 \\xD1\\x81\\xD1\\x84\\xD0\\xB5\\xD1\\x80\\xD0\\xB5 \\xD0\\xB7\\xD0\\xB4\\xD1\\x80\\xD0\\xB0\\xD0\\xB2\\xD0\\xBE\\xD0\\xBE\\xD1\\x85\\xD1\\x80\\xD0\\xB0\\xD0\\xBD\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F\"'},' + 
					'\"collaboratingKnoName\":null,' + 
					'\"collaboratingOrganizations\":null,' + 
					'\"functions\":null},' + 
				'\"inspectors\":[{\' + 
					'"fullName\":\"268014\\xD0\\xB0\\xD0\\xB2\\xD1\\x82\\xD0\\xBE \\xD0\\xA4\\xD0\\x98\\xD0\\x9E\",' + 
					'\"position\":\"268014\\xD0\\xB0\\xD0\\xB2\\xD1\\x82\\xD0\\xBE \\xD0\\x94\\xD0\\xBE\\xD0\\xBB\\xD0\\xB6\\xD0\\xBD\\xD0\\xBE\\xD1\\x81\\xD1\\x82\\xD1\\x8C\",' + 
					'\"type\":{\"id\":1,\"name\":\"\\xD0\\x9F\\xD1\\x80\\xD0\\xBE\\xD0\\xB2\\xD0\\xB5\\xD1\\x80\\xD1\\x8F\\xD1\\x8E\\xD1\\x89\\xD0\\xB8\\xD0\\xB9\",\"code\":\"TYPE_I\",\"enabled\":true},' + 
					'\"main\":true}],' + 
				'\"prosecutorOrganization\":{\"id\":\"2\",\"code\":null,\"name\":\"' +
		'\\xD0\\x93\\xD0\\xB5\\xD0\\xBD\\xD0\\xB5\\xD1\\x80\\xD0\\xB0\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD0\\xB0\\xD1\\x8F \\xD0\\xBF\\xD1\\x80\\xD0\\xBE\\xD0\\xBA\\xD1\\x83\\xD1\\x80\\xD0\\xB0\\xD1\\x82\\xD1\\x83\\xD1\\x80\\xD0\\xB0 \\xD0\\xA0\\xD0\\xBE\\xD1\\x81\\xD1\\x81\\xD0\\xB8\\xD0\\xB9\\xD1\\x81\\xD0\\xBA\\xD0\\xBE\\xD0\\xB9 \\xD0\\xA4\\xD0\\xB5\\xD0\\xB4\\xD0\\xB5\\xD1\\x80\\xD0\\xB0\\xD1\\x86\\xD0\\xB8\\xD0\\xB8\",\"address\":null,\"contacts\":null,\"federalDistrictId\":null,\"regionId\":null,\"' + 
		'parentId\":null,\"enabled\":null},' + 
				'\"rejectReasons\":null,' + 
				'\"organization\":{\"inn\":\"{INN}\",\"ogrn\":\"{OGRN}\",\"organizationName\":\"\\xD0\\x9E\\xD0\\x91\\xD0\\xA9\\xD0\\x95\\xD0\\xA1\\xD0\\xA2\\xD0\\x92\\xD0\\x9E \\xD0\\xA1 \\xD0\\x9E\\xD0\\x93\\xD0\\xA0\\xD0\\x90\\xD0\\x9D\\xD0\\x98\\xD0\\xA7\\xD0\\x95\\xD0\\x9D\\xD0\\x9D\\xD0\\x9E\\xD0\\x99 ' +
		'\\xD0\\x9E\\xD0\\xA2\\xD0\\x92\\xD0\\x95\\xD0\\xA2\\xD0\\xA1\\xD0\\xA2\\xD0\\x92\\xD0\\x95\\xD0\\x9D\\xD0\\x9D\\xD0\\x9E\\xD0\\xA1\\xD0\\xA2\\xD0\\xAC\\xD0\\xAE \\\"\\xD0\\x94\\xD0\\x9E\\xD0\\x9C \\xD0\\xA1\\xD0\\x95\\xD0\\xA0\\xD0\\x92\\xD0\\x98\\xD0\\xA1\\\"\",\"type\":{\"id\":0,\"name\":\"\\xD0\\xAE\\xD0\\x9B/\\xD0\\x98\\xD0\\x9F\",\"code\":\"UL_IP\",\"federalLaw\":null,\"enabled\":true,\"weight\":0},\"registrationDate\":\"2016-08-09\",\"licenseReasonStartDate\":null,\"licenseReasonKnmEndDate\"' + 
		':null,\"autocomplete\":true,\"mspCode\":null},' +
				'\"riskCategory\":null,' + 
				'\"objects\":null,' + 
				'\"noticeMethod\":null,' + 
				'\"noticeDate\":null,' + 
				'\"documents\":null,' + 
				'\"links\":[],' + 
				'\"district\":{\"id\":\"1000000000000001\",\"name\":\"\\xD0\\xA0\\xD0\\x9E\\xD0\\xA1\\xD0\\xA1\\xD0\\x98\\xD0\\xAF - \\xD1\\x81\\xD0\\xBE\\xD1\\x81\\xD1\\x82\\xD0\\xB0\\xD0\\xB2 \\xD1\\x84\\xD0\\xB5\\xD0\\xB4\\xD0\\xB5\\xD1\\x80\\xD0\\xB0\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD1\\x8B\\xD1\\x85 ' +
		'\\xD0\\xBE\\xD0\\xBA\\xD1\\x80\\xD1\\x83\\xD0\\xB3\\xD0\\xBE\\xD0\\xB2\",\"center\":null,\"okatoTer\":null,\"okatoKod1\":null,\"okatoRazdel\":null,\"federalRegionCode\":null,\"federalDistrict\":null},' + 
				'\"requirements\":[{\"name\":\"10798\\xD0\\xB0\\xD0\\xB2\\xD1\\x82\\xD0\\xBE \\xD0\\x9D\\xD0\\xB0\\xD0\\xB8\\xD0\\xBC\\xD0\\xB5\\xD0\\xBD\\xD0\\xBE\\xD0\\xB2\\xD0\\xB0\\xD0\\xBD\\xD0\\xB8\\xD0\\xB5\",\"template\":{\"id\":{requirementTemplatesId},\"name\":\"10798\\xD0\\xB0\\xD0\\xB2\\xD1\\x82\\xD0\\xBE ' +
		'\\xD0\\x9D\\xD0\\xB0\\xD0\\xB8\\xD0\\xBC\\xD0\\xB5\\xD0\\xBD\\xD0\\xBE\\xD0\\xB2\\xD0\\xB0\\xD0\\xBD\\xD0\\xB8\\xD0\\xB5\",\"byDefault\":false,\"knoOrganizationId\":\"{knoId}\",\"supervisionType\":216,\"requirements\":[{\"guid\":null,\"id\":60904,\"name\":\"10798\\xD0\\xB0\\xD0\\xB2\\xD1\\x82\\xD0\\xBE \\xD0\\x9D\\xD0\\xB0\\xD0\\xB8\\xD0\\xBC\\xD0\\xB5\\xD0\\xBD\\xD0\\xBE\\xD0\\xB2\\xD0\\xB0\\xD0\\xBD\\xD0\\xB8\\xD0\\xB5 \\xD0\\x9D\\xD0\\x9F\\xD0\\x90\",\"props\":\"' + 
		'10798\\xD0\\xB0\\xD0\\xB2\\xD1\\x82\\xD0\\xBE \\xD0\\xA4\\xD0\\xBE\\xD1\\x80\\xD0\\xBC\\xD1\\x83\\xD0\\xBB\\xD0\\xB8\\xD1\\x80\\xD0\\xBE\\xD0\\xB2\\xD0\\xBA\\xD0\\xB0\",\"number\":\"107981\",\"date\":\"2022-02-17\",\"paragraph\":null,\"part\":null,\"article\":null,\"index\":0}],\"deleted\":false},\"documents\":[{\"guid\":null,\"id\":60904,\"name\":\"10798\\xD0\\xB0\\xD0\\xB2\\xD1\\x82\\xD0\\xBE ' + 
		'\\xD0\\x9D\\xD0\\xB0\\xD0\\xB8\\xD0\\xBC\\xD0\\xB5\\xD0\\xBD\\xD0\\xBE\\xD0\\xB2\\xD0\\xB0\\xD0\\xBD\\xD0\\xB8\\xD0\\xB5 \\xD0\\x9D\\xD0\\x9F\\xD0\\x90\",\"props\":\"10798\\xD0\\xB0\\xD0\\xB2\\xD1\\x82\\xD0\\xBE \\xD0\\xA4\\xD0\\xBE\\xD1\\x80\\xD0\\xBC\\xD1\\x83\\xD0\\xBB\\xD0\\xB8\\xD1\\x80\\xD0\\xBE\\xD0\\xB2\\xD0\\xBA\\xD0\\xB0\",\"number\":\"107981\",\"date\":\"2022-02-17\",\"paragraph\":null,\"part\":null,\"article\":null,\"index\":0}],\"knoOrganization\":{knoOrganization},\"supervisionType\":{\"id\":216,\"idBk\":216,\"guid\":\"20191118-1816-4483-4742-000000383432\",\"name\":\"\\xD0\\x92\\xD1\\x8B\\xD0\\xB1\\xD0\\xBE\\xD1\\x80\\xD0\\xBE\\xD1\\x87\\xD0\\xBD\\xD1\\x8B\\xD0\\xB9 \\xD0\\xBA\\xD0\\xBE\\xD0\\xBD\\xD1\\x82\\xD1\\x80\\xD0\\xBE\\xD0\\xBB\\xD1\\x8C \\xD0\\xBA\\xD0\\xB0\\xD1\\x87\\xD0\\xB5\\xD1\\x81\\xD1\\x82\\xD0\\xB2\\xD0\\xB0 ' + 
		'\\xD0\\xB1\\xD0\\xB8\\xD0\\xBE\\xD0\\xBC\\xD0\\xB5\\xD0\\xB4\\xD0\\xB8\\xD1\\x86\\xD0\\xB8\\xD0\\xBD\\xD1\\x81\\xD0\\xBA\\xD0\\xB8\\xD1\\x85 \\xD0\\xBA\\xD0\\xBB\\xD0\\xB5\\xD1\\x82\\xD0\\xBE\\xD1\\x87\\xD0\\xBD\\xD1\\x8B\\xD1\\x85 \\xD0\\xBF\\xD1\\x80\\xD0\\xBE\\xD0\\xB4\\xD1\\x83\\xD0\\xBA\\xD1\\x82\\xD0\\xBE\\xD0\\xB2.\",\"federalLaw\":{\"id\":0,\"name\":\"294 \\xD0\\xA4\\xD0\\x97\",\"code\":\"294\"},\"digitCode\":\"1.176\",\"code\":\"SPV_216\",\"enabled\":true},\"guid\":null}],' + 
				'\"deleted\":null,' +
				'\"publishedStatus\":null,' +
				'\"manualPublish\":null,' + 
				'\"published\":null,' +
				'\"correlationToken\":null,' + 
				'\"createdBy\":null,' + 
				'\"updatedBy\":null,' + 
				'\"created\":null,' + 
				'\"updated\":null,' + 
				'\"note\":null,' + 
				'\"hash\":null,' +
				'\"signed\":null,' + 
				'\"signatureInfo\":null,' + 
				'\"dateCreate\":null, ' + 
				'\"classificationDateCreate\":null,' + 
				'\"publishDateCreate\":null,' + 
				'\"statusDateCreate\":null,' + 
				'\"knmErknm\":null,' + 
				'\"pmErknm\":null,' +
				'\"version\":\"ERP\",' +
				'\"clientTime\":\"{clientTime}\"}'
		}
	);

	web.customRequest(
		{
			name : 'find-previous', 
			url : '{privateURL}/private/api/knm/find-previous?size=10', 
			method : 'POST', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't338.inf', 
			mode : 'HTML', 
			encType : 'application/json', 
			body : '{\"year\":' + dateNow.getFullYear() + ',\"inn\":[\"{INN}\"],\"ogrn\":[\"{OGRN}\"]}'
		}
	);

	web.revertAutoHeader('Origin');

	web.url(
		{
			name : 'links_2', 
			url : '{privateURL}/private/api/knm/{KNMid}/links', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't340.inf', 
			mode : 'HTML'
		}
	);

	web.url(
		{
			name : 'getKNM', 
			url : '{privateURL}/private/api/knm/{KNMid}', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/{KNMid}', 
			snapshot : 't341.inf', 
			mode : 'HTML'
		}
	);

	web.url(
		{
			name : 'organizations_13', 
			url : '{privateURL}/erknm-catalogs/api/general-info/organizations?withDistrict=true', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/new', 
			snapshot : 't342.inf', 
			mode : 'HTML'
		}
	);

	web.url(
		{
			name : 'history', 
			url : '{privateURL}/private/api/knm/{KNMid}/history', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/{KNMid}', 
			snapshot : 't344.inf', 
			mode : 'HTML'
		}
	);

	web.addAutoHeader('Origin', '{privateURL}');

	web.customRequest(
		{
			name : 'openKNM', 
			url : '{privateURL}/erknm-editors/api/knm/{KNMid}', 
			method : 'PUT', 
			resource : 0, 
			recContentType : 'application/json', 
			referer : '{privateURL}/private/knm/{KNMid}', 
			snapshot : 't345.inf', 
			mode : 'HTML'
		}
	);

//	web.customRequest(
//		{
//			name : 'logout_3', 
//			url : '{privateURL}/public/auth/authenticator/api/internalauth/logout', 
//			method : 'DELETE', 
//			resource : 0, 
//			referer : '{privateURL}/private/knm/{KNMid}', 
//			snapshot : 't346.inf', 
//			mode : 'HTML'
//		}
//	);

	function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
	return 0;
}

