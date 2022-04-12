////"'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
////" Script Title       : 
////"                      
////" Script Date        : Thu Mar  3 13:31:05 2022
////"                       
////"'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
//
function addKNM_ERKNM()
{
//	web.setUser('supervisor', 
//		lr.unmask('622098e05550dd86e2283518'), 
//		'private.proverki.local:80');
//
//	web.addCookie('_yasc=xT4nyDnPIHPxgMSYHT57YbjUBRlG9V/kRizPxvY1XvW2wHDH; DOMAIN=yandex.ru');
//
//	web.addCookie('ys=wprid.1643638350173521-13608692661345350810-vla1-3034-vla-l7-balancer-8080-BAL-4638#musicchrome.0-0-4711111; DOMAIN=yandex.ru');
//
//	web.addAutoHeader('DNT', 
//		'1');
//
//	web.addHeader('Upgrade-Insecure-Requests', 
//		'1');
//
//	web.url(
//		{
//			name : 'private.proverki.local_5', 
//			url : 'http://private.proverki.local/', 
//			resource : 0, 
//			referer : '', 
//			snapshot : 't347.inf', 
//			mode : 'HTML', 
//			extraRes :  [
//				{url : 'https://yandex.ru/clck/click/dtype=elduse/path=tech.yaelements.dayuse/vars=-dayuse=832,-bro=chrome,-productname=weatherchrome,-ver=8-22-3,-ui=%7B09DD5623-D941-75FB-FF65-BEE4E3B516BA%7D,-brandID=yandex,-clid1=2231762/slots=0,0,0/*', referer : ''},
//				{url : '/private/static/js/2.6caa3188.chunk.js', referer : ''},
//				{url : '/private/static/js/main.b3e3c4c0.chunk.js', referer : ''},
//				{url : '/private/static/media/FiraSans-Regular.34239e5e.woff2', referer : 'http://private.proverki.local/private/static/css/main.881e09d5.chunk.css'},
//				{url : '/private/static/media/FiraSans-Light.4e01567d.woff2', referer : 'http://private.proverki.local/private/static/css/main.881e09d5.chunk.css'},
//				{url : '/private/static/media/loader.76756433.gif', referer : 'http://private.proverki.local/private/auth'},
//				{url : '/private/faviconNew.ico', referer : 'http://private.proverki.local/private/auth'}
//			]
//		}
//	);
//
//	web.setSocketsOption('INITIAL_AUTH', 'BASIC');
//
//	web.addHeader('Origin', 
//		'http://private.proverki.local');
//
//	lr.thinkTime(8);
//	web.customRequest(
//		{
//			name : 'auth_5', 
//			url : 'http://private.proverki.local/public/auth/authenticator/api/internalauth/auth?loaderKey=default', 
//			method : 'POST', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/auth', 
//			snapshot : 't348.inf', 
//			mode : 'HTML', 
//			encType : ''
//		}
//	);
//
//	web.url(
//		{
//			name : 'extendedprofile_6', 
//			url : 'http://private.proverki.local/public/api/access-manager/api/users/current/extendedprofile', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/auth', 
//			snapshot : 't349.inf', 
//			mode : 'HTML', 
//			extraRes :  [
//				{url : '/private/api/public-portal-url', referer : 'http://private.proverki.local/private/auth'}
//			]
//		}
//	);
//
//	web.url(
//		{
//			name : 'organizations_14', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/general-info/organizations', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/auth', 
//			snapshot : 't350.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	lr.thinkTime(4);
//	web.url(
//		{
//			name : 'roles_4', 
//			url : 'http://private.proverki.local/private/api/admin/news/roles', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/lk/info', 
//			snapshot : 't351.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'published_11', 
//			url : 'http://private.proverki.local/private/api/news/published?type=ANNOUNCEMENT&order=published,desc;', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/lk/info', 
//			snapshot : 't352.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'status-info-read_4', 
//			url : 'http://private.proverki.local/private/api/signature/user/status-info-read', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/lk/info', 
//			snapshot : 't353.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'organizations_15', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/general-info/organizations', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/lk/info', 
//			snapshot : 't354.inf', 
//			mode : 'HTML', 
//			extraRes :  [
//				{url : '/private/static/media/close.4a519fb6.svg', referer : 'http://private.proverki.local/private/static/css/main.881e09d5.chunk.css'}
//			]
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'check-notification_4', 
//			url : 'http://private.proverki.local/knm-service/api/knm-plan/check-notification', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/lk/info', 
//			snapshot : 't355.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'checklist-answer-types_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/checklist-answer-types', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/lk/info', 
//			snapshot : 't356.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'knm-expert-types', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-expert-types', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/lk/info', 
//			snapshot : 't357.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'knm-document-types_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/knm-document-types', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/lk/info', 
//			snapshot : 't358.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'knm-document-types_4', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-document-types', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/lk/info', 
//			snapshot : 't359.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'knm-notice-methods_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/knm-notice-methods', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/lk/info', 
//			snapshot : 't360.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'knm-responsible-types', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-responsible-types', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/lk/info', 
//			snapshot : 't361.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'knm-types_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/knm-types?enabled_248=true', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/lk/info', 
//			snapshot : 't362.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'acquaintance-types', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/acquaintance-types', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/lk/info', 
//			snapshot : 't363.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'responsibility-type', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/responsibility-type', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/lk/info', 
//			snapshot : 't364.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'kind-result-decision', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/kind-result-decision', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/lk/info', 
//			snapshot : 't365.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'danger-class', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/danger-class', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/lk/info', 
//			snapshot : 't366.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'kno-organizations', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/kno-organizations', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/lk/info', 
//			snapshot : 't367.inf', 
//			mode : 'HTML', 
//			extraRes :  [
//				{url : '/private/static/media/add.aa964dd5.svg', referer : 'http://private.proverki.local/private/static/css/main.881e09d5.chunk.css'},
//				{url : '/private/static/media/info-italic.27ab16a9.svg', referer : 'http://private.proverki.local/private/static/css/main.881e09d5.chunk.css'},
//				{url : '/private/static/media/delete.6395cd7b.svg', referer : 'http://private.proverki.local/private/static/css/main.881e09d5.chunk.css'},
//				{url : '/private/static/media/settings.4811642b.svg', referer : 'http://private.proverki.local/private/static/css/main.881e09d5.chunk.css'}
//			]
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'settings_5', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/settings', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knms', 
//			snapshot : 't368.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'schedule_5', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/settings/schedule', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knms', 
//			snapshot : 't369.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'published_12', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/news/published?type=ANNOUNCEMENT&order=published,desc;', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knms', 
//			snapshot : 't370.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.addHeader('Origin', 
//		'http://private.proverki.local');
//
//	web.customRequest(
//		{
//			name : 'find-indexes_5', 
//			url : 'http://private.proverki.local/erknm-index/api/knm/find-indexes?page=0&size=50&order=erpId%2Casc', 
//			method : 'POST', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knms', 
//			snapshot : 't371.inf', 
//			mode : 'HTML', 
//			encType : 'application/json', 
//			body : '{\"version\":\"ERKNM\"}'
//		}
//	);
//
//	web.url(
//		{
//			name : 'published_13', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/news/published?type=ANNOUNCEMENT&order=published,desc;', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/new', 
//			snapshot : 't372.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'knm-reason-types', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-reason-types?isPm=false&isPlanned=false', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/new', 
//			snapshot : 't373.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.url(
//		{
//			name : 'organizations_16', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/general-info/organizations?withDistrict=true', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/new', 
//			snapshot : 't374.inf', 
//			mode : 'HTML', 
//			extraRes :  [
//				{url : '/private/static/media/back.70f06ddf.svg', referer : 'http://private.proverki.local/private/static/css/main.881e09d5.chunk.css'}
//			]
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'knm-reject-reason-types', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-reject-reason-types?isPlaned=false', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/new', 
//			snapshot : 't375.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'knm-plan-reason-change-types_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-plan-reason-change-types', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/new', 
//			snapshot : 't376.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	lr.thinkTime(4);
//	web.customRequest(
//		{
//			name : 'supervision-type', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/supervision-type?uuids=0ae947de-79cd-1640-8179-fb67ca760249', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/new', 
//			snapshot : 't377.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'check-list', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/check-list?uuidKno=0ae947de-79cd-1640-8179-fb67ca760249&uuidSupervision=0af4cd2e-78cb-109b-8178-e98123ff01b6', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/new', 
//			snapshot : 't378.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.url(
//		{
//			name : 'get-kno-supervision-uuid', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/constraint/get-kno-supervision-uuid?knoVersionId=0ae947de-79cd-1640-8179-fb67ca760249&supervisionVersionId=0af4cd2e-78cb-109b-8178-e98123ff01b6', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/new', 
//			snapshot : 't379.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'requirement', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/requirement?uuidKno=0ae947de-79cd-1640-8179-fb67ca760249&uuidSupervision=0af4cd2e-78cb-109b-8178-e98123ff01b6', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/new', 
//			snapshot : 't380.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'positions', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/positions?uniqueUuid=992dfa3d-57e4-4550-aa46-3871bbc45cd3', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/new', 
//			snapshot : 't381.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'subject-type', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/subject-type?uniqueUuid=992dfa3d-57e4-4550-aa46-3871bbc45cd3', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/new', 
//			snapshot : 't382.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'knm-kind', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/knm-kind?uniqueUuid=992dfa3d-57e4-4550-aa46-3871bbc45cd3', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/new', 
//			snapshot : 't383.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'subject-sub-kind', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/subject-sub-kind?uniqueUuid=992dfa3d-57e4-4550-aa46-3871bbc45cd3', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/new', 
//			snapshot : 't384.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'participant-positions', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/participant-positions?uniqueUuid=992dfa3d-57e4-4550-aa46-3871bbc45cd3', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/new', 
//			snapshot : 't385.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'accepted-document', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/accepted-document?uniqueUuid=992dfa3d-57e4-4550-aa46-3871bbc45cd3', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/new', 
//			snapshot : 't386.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'risk-indicatory', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/risk-indicatory?uniqueUuid=992dfa3d-57e4-4550-aa46-3871bbc45cd3', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/new', 
//			snapshot : 't387.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'subject-kind', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/subject-kind?uniqueUuid=992dfa3d-57e4-4550-aa46-3871bbc45cd3', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/new', 
//			snapshot : 't388.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.url(
//		{
//			name : '5', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/knm-reject-reason-types/5', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/new', 
//			snapshot : 't389.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '5_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/knm-reason-types/5', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/new', 
//			snapshot : 't390.inf', 
//			mode : 'HTML', 
//			extraRes :  [
//				{url : '/private/static/media/chevron-down.f78d5fc1.svg', referer : 'http://private.proverki.local/private/static/css/main.881e09d5.chunk.css'}
//			]
//		}
//	);
//
//	// Connection ID 4 received buffer WebSocketReceive8
//	// Connection ID 5 received buffer WebSocketReceive9
//	web.url(
//		{
//			name : '7743943819', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/fns/lookup/inn/7743943819', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/new', 
//			snapshot : 't391.inf', 
//			mode : 'HTML', 
//			extraRes :  [
//				{url : '/private/static/media/remove.7e6ce6a4.svg', referer : 'http://private.proverki.local/private/static/css/main.881e09d5.chunk.css'}
//			]
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'okved', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/registry/export/okved?inn=7743943819&ogrn=5147746249965', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/new', 
//			snapshot : 't392.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.addHeader('Origin', 
//		'http://private.proverki.local');
//
//	lr.thinkTime(8);
//	web.customRequest(
//		{
//			name : 'knm_3', 
//			url : 'http://private.proverki.local/erknm-knm/api/knm', 
//			method : 'POST', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/new', 
//			snapshot : 't393.inf', 
//			mode : 'HTML', 
//			encType : 'application/json', 
//			bodyBinary : '{\"id\":null,\"erpId\":null,\"guid\":null,\"status\":null,\"year\":null,\"month\":null,\"creationDate\":null,\"publicationDate\":null,\"kind\":null,\"federalLaw\":null,\"title\":null,\"testPurchaseMethod\":null,\"testPurchaseDescription\":null,\"supervisionType\":null,\"startDateIsMonth\":null,\"approve\":null,\"reasons\":null,\"legalBases\":null,\"events\":null,\"signStatus\":null,\"knoOrganization\":null,\"inspectors\":null,\"rejectReasons\":null,\"organization\":null,\"' + 
//		'riskCategory\":null,\"objects\":null,\"links\":[],\"district\":{\"id\":\"1000000000000001\",\"name\":\"\\xD0\\xA0\\xD0\\x9E\\xD0\\xA1\\xD0\\xA1\\xD0\\x98\\xD0\\xAF - \\xD1\\x81\\xD0\\xBE\\xD1\\x81\\xD1\\x82\\xD0\\xB0\\xD0\\xB2 \\xD1\\x84\\xD0\\xB5\\xD0\\xB4\\xD0\\xB5\\xD1\\x80\\xD0\\xB0\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD1\\x8B\\xD1\\x85 \\xD0\\xBE\\xD0\\xBA\\xD1\\x80\\xD1\\x83\\xD0\\xB3\\xD0\\xBE\\xD0\\xB2\",\"center\":null,\"okatoTer\":null,\"okatoKod1\":null,\"okatoRazdel\":null,\"' + 
//		'federalRegionCode\":null,\"federalDistrict\":null},\"requirements\":null,\"deleted\":null,\"publishedStatus\":null,\"manualPublish\":null,\"published\":null,\"correlationToken\":null,\"createdBy\":null,\"updatedBy\":null,\"created\":null,\"updated\":null,\"note\":null,\"hash\":null,\"signed\":null,\"signatureInfo\":null,\"dateCreate\":null,\"classificationDateCreate\":null,\"publishDateCreate\":null,\"statusDateCreate\":null,\"pmErknm\":null,\"planId\":null,\"planGuid\":null,\"type\":{\"id\":5,\"' + 
//		'name\":\"\\xD0\\x92\\xD0\\xBD\\xD0\\xB5\\xD0\\xBF\\xD0\\xBB\\xD0\\xB0\\xD0\\xBD\\xD0\\xBE\\xD0\\xB2\\xD0\\xBE\\xD0\\xB5 \\xD0\\x9A\\xD0\\x9D\\xD0\\x9C\",\"code\":\"VP\",\"enabled\":false,\"weight\":1,\"label\":\"\\xD0\\x92\\xD0\\xBD\\xD0\\xB5\\xD0\\xBF\\xD0\\xBB\\xD0\\xB0\\xD0\\xBD\\xD0\\xBE\\xD0\\xB2\\xD0\\xBE\\xD0\\xB5 \\xD0\\x9A\\xD0\\x9D\\xD0\\x9C\",\"value\":\"VP\"},\"startDate\":\"2022-02-25\",\"stopDate\":\"2022-02-27\",\"prosecutorOrganization\":{\"id\":\"2\",\"code\":null,\"name\":\"' + 
//		'\\xD0\\x93\\xD0\\xB5\\xD0\\xBD\\xD0\\xB5\\xD1\\x80\\xD0\\xB0\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD0\\xB0\\xD1\\x8F \\xD0\\xBF\\xD1\\x80\\xD0\\xBE\\xD0\\xBA\\xD1\\x83\\xD1\\x80\\xD0\\xB0\\xD1\\x82\\xD1\\x83\\xD1\\x80\\xD0\\xB0 \\xD0\\xA0\\xD0\\xBE\\xD1\\x81\\xD1\\x81\\xD0\\xB8\\xD0\\xB9\\xD1\\x81\\xD0\\xBA\\xD0\\xBE\\xD0\\xB9 \\xD0\\xA4\\xD0\\xB5\\xD0\\xB4\\xD0\\xB5\\xD1\\x80\\xD0\\xB0\\xD1\\x86\\xD0\\xB8\\xD0\\xB8\",\"address\":null,\"contacts\":null,\"federalDistrictId\":null,\"regionId\":null,\"' + 
//		'parentId\":null,\"enabled\":null},\"noticeMethod\":null,\"noticeDate\":null,\"documents\":null,\"knmErknm\":{\"accessToken\":null,\"knoOrganization\":{\"dictId\":\"af002594-a4f0-11eb-bcbc-0242ac130002\",\"dictVersionId\":\"0ae947de-79cd-1640-8179-fb67ca760249\"},\"decision\":{\"dateTimeDecision\":null,\"numberDecision\":null,\"placeDecision\":null,\"fioSigner\":null,\"titleSigner\":null},\"durationDays\":null,\"durationHours\":null,\"kindControl\":{\"dictId\":\"' + 
//		'1f27d942-a52e-11eb-bcbc-0242ac130002\",\"dictVersionId\":\"0af4cd2e-78cb-109b-8178-e98123ff01b6\"},\"kindKnm\":{\"dictId\":\"d2ec803a-a53e-11eb-bcbc-0242ac130002\",\"dictVersionId\":\"d2ec803a-a53e-11eb-bcbc-0242ac130003\"},\"reasonDocuments\":null,\"reasons\":[{\"reason\":{\"id\":null,\"type\":{\"id\":205,\"name\":\"(\\xD0\\xA4\\xD0\\x97 248) \\xD0\\x9D\\xD0\\xB0\\xD0\\xBB\\xD0\\xB8\\xD1\\x87\\xD0\\xB8\\xD0\\xB5 \\xD1\\x83 ' + 
//		'\\xD0\\xBA\\xD0\\xBE\\xD0\\xBD\\xD1\\x82\\xD1\\x80\\xD0\\xBE\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD0\\xBE\\xD0\\xB3\\xD0\\xBE (\\xD0\\xBD\\xD0\\xB0\\xD0\\xB4\\xD0\\xB7\\xD0\\xBE\\xD1\\x80\\xD0\\xBD\\xD0\\xBE\\xD0\\xB3\\xD0\\xBE) \\xD0\\xBE\\xD1\\x80\\xD0\\xB3\\xD0\\xB0\\xD0\\xBD\\xD0\\xB0 \\xD1\\x81\\xD0\\xB2\\xD0\\xB5\\xD0\\xB4\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD0\\xB9 \\xD0\\xBE \\xD0\\xBF\\xD1\\x80\\xD0\\xB8\\xD1\\x87\\xD0\\xB8\\xD0\\xBD\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD0\\xB8 ' + 
//		'\\xD0\\xB2\\xD1\\x80\\xD0\\xB5\\xD0\\xB4\\xD0\\xB0 (\\xD1\\x83\\xD1\\x89\\xD0\\xB5\\xD1\\x80\\xD0\\xB1\\xD0\\xB0) \\xD0\\xB8\\xD0\\xBB\\xD0\\xB8 \\xD0\\xBE\\xD0\\xB1 \\xD1\\x83\\xD0\\xB3\\xD1\\x80\\xD0\\xBE\\xD0\\xB7\\xD0\\xB5 \\xD0\\xBF\\xD1\\x80\\xD0\\xB8\\xD1\\x87\\xD0\\xB8\\xD0\\xBD\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F \\xD0\\xB2\\xD1\\x80\\xD0\\xB5\\xD0\\xB4\\xD0\\xB0 (\\xD1\\x83\\xD1\\x89\\xD0\\xB5\\xD1\\x80\\xD0\\xB1\\xD0\\xB0) ' + 
//		'\\xD0\\xBE\\xD1\\x85\\xD1\\x80\\xD0\\xB0\\xD0\\xBD\\xD1\\x8F\\xD0\\xB5\\xD0\\xBC\\xD1\\x8B\\xD0\\xBC \\xD0\\xB7\\xD0\\xB0\\xD0\\xBA\\xD0\\xBE\\xD0\\xBD\\xD0\\xBE\\xD0\\xBC \\xD1\\x86\\xD0\\xB5\\xD0\\xBD\\xD0\\xBD\\xD0\\xBE\\xD1\\x81\\xD1\\x82\\xD1\\x8F\\xD0\\xBC\",\"code\":\"ERKNM_5\",\"digitCode\":\"4.0.5\",\"hasText\":false,\"indicatorRiskRequired\":false,\"approveRequired\":false,\"dateRequired\":false,\"isDisabled\":false},\"text\":null,\"date\":null,\"main\":null,\"approveRequired\":null,\"' + 
//		'dateCreate\":null},\"riskIndikators\":null,\"numGuid\":null,\"dateCreate\":null}],\"dataContent\":null,\"prosecutorDocuments\":null,\"approve\":{\"approved\":null,\"approveRequired\":\"NON_REQUIRED\",\"approveNote\":null,\"dateDecision\":null,\"numberDecision\":null,\"fioSigner\":null,\"titleSigner\":null,\"noteAppeal\":null,\"rejectReasonType\":null,\"rejectReasonNote\":null,\"dateRejectReason\":null,\"prosecutorRegStatus\":null,\"note\":null,\"appeal\":null},\"organizations\":[{\"inn\":\"' + 
//		'7743943819\",\"ogrn\":\"5147746249965\",\"okveds\":null,\"addressFns\":null,\"organizationName\":\"\\xD0\\x9E\\xD0\\x91\\xD0\\xA9\\xD0\\x95\\xD0\\xA1\\xD0\\xA2\\xD0\\x92\\xD0\\x9E \\xD0\\xA1 \\xD0\\x9E\\xD0\\x93\\xD0\\xA0\\xD0\\x90\\xD0\\x9D\\xD0\\x98\\xD0\\xA7\\xD0\\x95\\xD0\\x9D\\xD0\\x9D\\xD0\\x9E\\xD0\\x99 \\xD0\\x9E\\xD0\\xA2\\xD0\\x92\\xD0\\x95\\xD0\\xA2\\xD0\\xA1\\xD0\\xA2\\xD0\\x92\\xD0\\x95\\xD0\\x9D\\xD0\\x9D\\xD0\\x9E\\xD0\\xA1\\xD0\\xA2\\xD0\\xAC\\xD0\\xAE \\\"' + 
//		'\\xD0\\xA2\\xD0\\xA0\\xD0\\x90\\xD0\\x9D\\xD0\\xA1\\xD0\\x9F\\xD0\\x9E\\xD0\\xA0\\xD0\\xA2\\xD0\\x9D\\xD0\\x9E-\\xD0\\xAD\\xD0\\x9A\\xD0\\xA1\\xD0\\x9F\\xD0\\x95\\xD0\\x94\\xD0\\x98\\xD0\\xA6\\xD0\\x98\\xD0\\x9E\\xD0\\x9D\\xD0\\x9D\\xD0\\x90\\xD0\\xAF \\xD0\\x9A\\xD0\\x9E\\xD0\\x9C\\xD0\\x9F\\xD0\\x90\\xD0\\x9D\\xD0\\x98\\xD0\\xAF \\\"\\xD0\\x9C\\xD0\\x95\\xD0\\x93\\xD0\\x90\\xD0\\x9F\\xD0\\x9E\\xD0\\x9B\\xD0\\x98\\xD0\\xA1\\\"\",\"mspCode\":null,\"checkSubjectResult\":null,\"dateCreate\":null,\"' + 
//		'act\":null,\"resultDecisions\":null,\"isAutocomplete\":true,\"isFiz\":null,\"guid\":null,\"isDocumentOrganization\":false}],\"objects\":[{\"address\":\"123\",\"objectType\":{\"dictId\":\"641d3956-a5b1-11eb-bcbc-0242ac130002\",\"dictVersionId\":\"0af4cd2e-78cb-109b-8178-ea2e8d4a0411\"},\"objectKind\":{\"dictId\":\"641d3e60-a5b1-11eb-bcbc-0242ac130002\",\"dictVersionId\":\"0ae95284-79cd-16d7-8179-e68a987d006a\"},\"objectSubKind\":{\"dictId\":\"641d3e60-a5b1-11eb-bcbc-0242ac130002\",\"dictVersionId\"' + 
//		':\"0ae95284-79cd-16d7-8179-e68a987d006a\"},\"riskCategory\":null,\"dangerClass\":{\"dictId\":\"aae78350-bdfd-12eb-8529-0242ac130003\",\"dictVersionId\":\"992a805a-f461-11eb-9a03-0242ac130003\"},\"guid\":null,\"streetGuid\":null,\"houseGuid\":null,\"roomGuid\":null,\"steadGuid\":null,\"addressFns\":null,\"autocomplete\":false,\"dateCreate\":null}],\"inspectors\":null,\"experts\":null,\"isHasCollaboratingOrganization\":null,\"collaboratingOrganizations\":null,\"events\":null,\"' + 
//		'collaboratingOrganizationChangeDate\":null,\"requirements\":null,\"approveDocs\":null,\"isChecklistsUsed\":null,\"checklists\":null,\"places\":null,\"organizationDocuments\":null,\"serviceDocument\":null,\"isRemote\":null,\"noteRemote\":null,\"withVideo\":null,\"isSelection\":null,\"selection\":null,\"isPresence\":null,\"isPresenceDelegateFullNames\":null,\"returnSelection\":null,\"attachmentsWeb\":null,\"documentRequestDate\":null,\"documentResponseDate\":null,\"manuallyRequirements\":null,\"' + 
//		'manuallyCheckList\":null,\"appealStatus\":null,\"changePlanReason\":null,\"isAppealed\":null,\"oldKnmNumber\":null,\"oldPlanNumber\":null,\"webNotificationInfos\":null},\"version\":\"ERKNM\",\"clientTime\":\"2022-02-24T13:10:25.229Z\"}'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '0ae947de-79cd-1640-8179-fb67ca760249', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/af002594-a4f0-11eb-bcbc-0242ac130002/0ae947de-79cd-1640-8179-fb67ca760249', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/new', 
//			snapshot : 't394.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '0af4cd2e-78cb-109b-8178-e98123ff01b6', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/1f27d942-a52e-11eb-bcbc-0242ac130002/0af4cd2e-78cb-109b-8178-e98123ff01b6', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/new', 
//			snapshot : 't395.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '0af4cd2e-78cb-109b-8178-ea2e8d4a0411', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/641d3956-a5b1-11eb-bcbc-0242ac130002/0af4cd2e-78cb-109b-8178-ea2e8d4a0411', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/new', 
//			snapshot : 't396.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'd2ec803a-a53e-11eb-bcbc-0242ac130003', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/d2ec803a-a53e-11eb-bcbc-0242ac130002/d2ec803a-a53e-11eb-bcbc-0242ac130003', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/new', 
//			snapshot : 't398.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '992a805a-f461-11eb-9a03-0242ac130003', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/aae78350-bdfd-12eb-8529-0242ac130003/992a805a-f461-11eb-9a03-0242ac130003', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/new', 
//			snapshot : 't399.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '0ae95284-79cd-16d7-8179-e68a987d006a', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/641d3e60-a5b1-11eb-bcbc-0242ac130002/0ae95284-79cd-16d7-8179-e68a987d006a', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/new', 
//			snapshot : 't400.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'links_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/knm/820703/links', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/new', 
//			snapshot : 't401.inf', 
//			mode : 'HTML', 
//			extraRes :  [
//				{url : '/private/static/media/exclamation-sign.e3b4a272.svg', referer : 'http://private.proverki.local/private/static/css/main.881e09d5.chunk.css'}
//			]
//		}
//	);
//
//	web.url(
//		{
//			name : 'organizations_17', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/general-info/organizations?withDistrict=true', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/new', 
//			snapshot : 't403.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : '820703', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/knm/820703', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/820703', 
//			snapshot : 't404.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.addAutoHeader('Origin', 
//		'http://private.proverki.local');
//
//	web.customRequest(
//		{
//			name : 'find-previous_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/knm/find-previous?size=10&isFederalLaw248=true', 
//			method : 'POST', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/820703', 
//			snapshot : 't405.inf', 
//			mode : 'HTML', 
//			encType : 'application/json', 
//			body : '{\"year\":2022,\"inn\":[\"7743943819\"],\"ogrn\":[\"5147746249965\"]}'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '820703_2', 
//			url : 'http://private.proverki.local/erknm-editors/api/knm/820703', 
//			method : 'PUT', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/820703', 
//			snapshot : 't406.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	return 0;
}
