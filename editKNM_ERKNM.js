////"'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
////" Script Title       : 
////"                      
////" Script Date        : Thu Mar  3 13:31:06 2022
////"                       
////"'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
//
function editKNM_ERKNM()
{
//	web.setUser('supervisor', 
//		lr.unmask('622098e05550dd86e2283518'), 
//		'private.proverki.local:80');
//
//	web.addAutoHeader('DNT', 
//		'1');
//
//	web.addHeader('Upgrade-Insecure-Requests', 
//		'1');
//
//	web.url(
//		{
//			name : 'private.proverki.local_6', 
//			url : 'http://private.proverki.local/', 
//			resource : 0, 
//			referer : '', 
//			snapshot : 't407.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.setSocketsOption('INITIAL_AUTH', 'BASIC');
//
//	// Connection ID 6 received buffer WebSocketReceive10
//	// Connection ID 7 received buffer WebSocketReceive11
//	web.addHeader('Origin', 
//		'http://private.proverki.local');
//
//	lr.thinkTime(7);
//	web.customRequest(
//		{
//			name : 'auth_6', 
//			url : 'http://private.proverki.local/public/auth/authenticator/api/internalauth/auth?loaderKey=default', 
//			method : 'POST', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/auth', 
//			snapshot : 't408.inf', 
//			mode : 'HTML', 
//			encType : ''
//		}
//	);
//
//	web.url(
//		{
//			name : 'extendedprofile_7', 
//			url : 'http://private.proverki.local/public/api/access-manager/api/users/current/extendedprofile', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/auth', 
//			snapshot : 't409.inf', 
//			mode : 'HTML', 
//			extraRes :  [
//				{url : '/erknm-catalogs/api/public-portal-url', referer : 'http://private.proverki.local/private/auth'}
//			]
//		}
//	);
//
//	web.url(
//		{
//			name : 'organizations_18', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/general-info/organizations', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/auth', 
//			snapshot : 't410.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'roles_5', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/admin/news/roles', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/lk/info', 
//			snapshot : 't411.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'published_14', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/news/published?type=ANNOUNCEMENT&order=published,desc;', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/lk/info', 
//			snapshot : 't412.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'organizations_19', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/general-info/organizations', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/lk/info', 
//			snapshot : 't413.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'status-info-read_5', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/signature/user/status-info-read', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/lk/info', 
//			snapshot : 't414.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'check-notification_5', 
//			url : 'http://private.proverki.local/erknm-knm/api/knm-plan/check-notification', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/lk/info', 
//			snapshot : 't415.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	lr.thinkTime(4);
//	web.customRequest(
//		{
//			name : 'settings_6', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/settings', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knms', 
//			snapshot : 't416.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'published_15', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/news/published?type=ANNOUNCEMENT&order=published,desc;', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knms', 
//			snapshot : 't417.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'schedule_6', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/settings/schedule', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knms', 
//			snapshot : 't418.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.addHeader('Origin', 
//		'http://private.proverki.local');
//
//	web.customRequest(
//		{
//			name : 'find-indexes_6', 
//			url : 'http://private.proverki.local/erknm-index/api/knm/find-indexes?page=0&size=50&order=erpId%2Casc', 
//			method : 'POST', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knms', 
//			snapshot : 't419.inf', 
//			mode : 'HTML', 
//			encType : 'application/json', 
//			body : '{\"version\":\"ERKNM\"}'
//		}
//	);
//
//	web.addHeader('Upgrade-Insecure-Requests', 
//		'1');
//
//	web.url(
//		{
//			name : '819254', 
//			url : 'http://private.proverki.local/private/knm/819254', 
//			resource : 0, 
//			recContentType : 'text/html', 
//			referer : '', 
//			snapshot : 't420.inf', 
//			mode : 'HTML', 
//			extraRes :  [
//				{url : '/erknm-catalogs/api/public-portal-url'}
//			]
//		}
//	);
//
//	web.url(
//		{
//			name : 'extendedprofile_8', 
//			url : 'http://private.proverki.local/public/api/access-manager/api/users/current/extendedprofile', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't421.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'organizations_20', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/general-info/organizations', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't422.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'knm-expert-types_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-expert-types', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't423.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'checklist-answer-types_4', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/checklist-answer-types', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't424.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'knm-document-types_5', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-document-types', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't425.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'knm-document-types_6', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/knm-document-types', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't426.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'knm-notice-methods_4', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/knm-notice-methods', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't427.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'knm-responsible-types_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-responsible-types', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't428.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'knm-types_4', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/knm-types?enabled_248=true', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't429.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.url(
//		{
//			name : 'responsibility-type_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/responsibility-type', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't430.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'acquaintance-types_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/acquaintance-types', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't431.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'kind-result-decision_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/kind-result-decision', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't432.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'organizations_21', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/general-info/organizations?withDistrict=true', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't433.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'knm-reason-types_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-reason-types?isPm=false&isPlanned=false', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't434.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.url(
//		{
//			name : 'roles_6', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/admin/news/roles', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't435.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'danger-class_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/danger-class', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't436.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : '819254_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/knm/819254', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't437.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'published_16', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/news/published?type=ANNOUNCEMENT&order=published,desc;', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't438.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'kno-organizations_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/kno-organizations', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't439.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'knm-reject-reason-types_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-reject-reason-types?isPlaned=false', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't440.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'knm-plan-reason-change-types_4', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-plan-reason-change-types', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't441.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '0ae95284-79cd-16d7-817a-0fce4d560592', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/af002594-a4f0-11eb-bcbc-0242ac130002/0ae95284-79cd-16d7-817a-0fce4d560592', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't442.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '0ae96452-7a6d-1eab-817a-75be2a8700d9', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/b6fc9844-a528-11eb-bcbc-0242ac130002/0ae96452-7a6d-1eab-817a-75be2a8700d9', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't443.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '0af4cd2e-78cb-109b-8178-e981258701db', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/1f27d942-a52e-11eb-bcbc-0242ac130002/0af4cd2e-78cb-109b-8178-e981258701db', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't444.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'd2ec803a-a53e-11eb-bcbc-0242ac130053', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/d2ec803a-a53e-11eb-bcbc-0242ac130002/d2ec803a-a53e-11eb-bcbc-0242ac130053', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't445.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '0af4cd2e-78cb-109b-8178-d5a7ba1b0018', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/f0f9a79a-a5b3-11eb-bcbc-0242ac130002/0af4cd2e-78cb-109b-8178-d5a7ba1b0018', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't446.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'ccbc95b6-2570-434d-bae0-918cf5be156a', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/a43f056e-b95c-11eb-8529-0242ac130003/ccbc95b6-2570-434d-bae0-918cf5be156a', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't447.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '7a322fc0-a08d-468a-b6e2-6e61b6c2d475', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/a43f056e-b95c-11eb-8529-0242ac130003/7a322fc0-a08d-468a-b6e2-6e61b6c2d475', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't448.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'links_4', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/knm/819254/links', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't449.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'a73bdd66-6426-46eb-a1e3-930ea7049b87', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/a43f056e-b95c-11eb-8529-0242ac130003/a73bdd66-6426-46eb-a1e3-930ea7049b87', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't450.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.addHeader('Origin', 
//		'http://private.proverki.local');
//
//	web.customRequest(
//		{
//			name : '819254_3', 
//			url : 'http://private.proverki.local/erknm-editors/api/knm/819254', 
//			method : 'PUT', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't451.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '5_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/knm-reason-types/5', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't452.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : '5_4', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/knm-reject-reason-types/5', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't453.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'supervision-type_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/supervision-type?uuids=0ae95284-79cd-16d7-817a-0fce4d560592', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't454.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'check-list_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/check-list?uuidKno=0ae95284-79cd-16d7-817a-0fce4d560592&uuidSupervision=0af4cd2e-78cb-109b-8178-e981258701db', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't455.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.url(
//		{
//			name : 'get-kno-supervision-uuid_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/constraint/get-kno-supervision-uuid?knoVersionId=0ae95284-79cd-16d7-817a-0fce4d560592&supervisionVersionId=0af4cd2e-78cb-109b-8178-e981258701db', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't456.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'requirement_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/requirement?uuidKno=0ae95284-79cd-16d7-817a-0fce4d560592&uuidSupervision=0af4cd2e-78cb-109b-8178-e981258701db', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't457.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'knm-kind_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/knm-kind?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't458.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'positions_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/positions?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't459.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'subject-type_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/subject-type?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't460.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'participant-positions_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/participant-positions?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't461.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.url(
//		{
//			name : 'get-event-uuid', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/constraint/get-event-uuid?knoSupervisionId=c51b895a-6c36-499b-a038-6f18aa7c2032&knmKindId=d2ec803a-a53e-11eb-bcbc-0242ac130053', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't462.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'accepted-document_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/accepted-document?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't463.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'subject-sub-kind_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/subject-sub-kind?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't464.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'risk-indicatory_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/risk-indicatory?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't465.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'subject-kind_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/subject-kind?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't466.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'event-type', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/event-type?uniqueUuidEvent=c6bdabdf-f10d-4a96-ba21-c7976b73ac85', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't467.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'risk-category', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/risk-category?uniqueUuid=c6bdabdf-f10d-4a96-ba21-c7976b73ac85', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't468.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.addAutoHeader('Origin', 
//		'http://private.proverki.local');
//
//	lr.thinkTime(7);
///* Added by Async CodeGen.
//ID=Poll_0
//ScanType = Recording
//
//The following URLs are considered part of this conversation:
//	http://private.proverki.local/erknm-editors/api/knm/819254
//
//TODO - The following callbacks have been added to AsyncCallbacks.c.
//Add your code to the callback implementations as necessary.
//	Poll_0_RequestCB
//	Poll_0_ResponseCB
// */
//	web.regAsyncAttributes(
//		{
//			id : 'Poll_0', 
//			pattern : 'Poll', 
//			url : 'http://private.proverki.local/erknm-editors/api/knm/819254', 
//			pollIntervalMs : 4000, 
//			requestCB : 'Poll_0_RequestCB', 
//			responseCB : 'Poll_0_ResponseCB'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '819254_4', 
//			url : 'http://private.proverki.local/erknm-editors/api/knm/819254', 
//			method : 'PUT', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't469.inf', 
//			mode : 'HTML'
//		}
//	);
//
///* Removed by Async CodeGen.
//ID = Poll_0
// */
//	/*
// web.customRequest(
//		{
//			name : '819254_5', 
//			url : 'http://private.proverki.local/erknm-editors/api/knm/819254', 
//			method : 'PUT', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't470.inf', 
//			mode : 'HTML'
//		}
//	); 
//	*/
//
///* Removed by Async CodeGen.
//ID = Poll_0
// */
//	/*
// web.customRequest(
//		{
//			name : '819254_6', 
//			url : 'http://private.proverki.local/erknm-editors/api/knm/819254', 
//			method : 'PUT', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't471.inf', 
//			mode : 'HTML'
//		}
//	); 
//	*/
//
///* Added by Async CodeGen.
//ID = Poll_0
// */
//	web.stopAsync(
//		{
//			id : 'Poll_0'
//		}
//	);
//
//	lr.thinkTime(13);
///* Added by Async CodeGen.
//ID=Poll_1
//ScanType = Recording
//
//The following URLs are considered part of this conversation:
//	http://private.proverki.local/erknm-editors/api/knm/819254
//
//TODO - The following callbacks have been added to AsyncCallbacks.c.
//Add your code to the callback implementations as necessary.
//	Poll_1_RequestCB
//	Poll_1_ResponseCB
// */
//	web.regAsyncAttributes(
//		{
//			id : 'Poll_1', 
//			pattern : 'Poll', 
//			url : 'http://private.proverki.local/erknm-editors/api/knm/819254', 
//			pollIntervalMs : 4000, 
//			requestCB : 'Poll_1_RequestCB', 
//			responseCB : 'Poll_1_ResponseCB'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '819254_7', 
//			url : 'http://private.proverki.local/erknm-editors/api/knm/819254', 
//			method : 'PUT', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't472.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'find-previous_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/knm/find-previous?size=10&isFederalLaw248=true', 
//			method : 'POST', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't473.inf', 
//			mode : 'HTML', 
//			encType : 'application/json', 
//			body : '{\"year\":2022,\"inn\":[\"7811689828\"]}'
//		}
//	);
//
///* Removed by Async CodeGen.
//ID = Poll_1
// */
//	/*
// web.customRequest(
//		{
//			name : '819254_8', 
//			url : 'http://private.proverki.local/erknm-editors/api/knm/819254', 
//			method : 'PUT', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't474.inf', 
//			mode : 'HTML'
//		}
//	); 
//	*/
//
///* Removed by Async CodeGen.
//ID = Poll_1
// */
//	/*
// web.customRequest(
//		{
//			name : '819254_9', 
//			url : 'http://private.proverki.local/erknm-editors/api/knm/819254', 
//			method : 'PUT', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't475.inf', 
//			mode : 'HTML'
//		}
//	); 
//	*/
//
///* Removed by Async CodeGen.
//ID = Poll_1
// */
//	/*
// web.customRequest(
//		{
//			name : '819254_10', 
//			url : 'http://private.proverki.local/erknm-editors/api/knm/819254', 
//			method : 'PUT', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't476.inf', 
//			mode : 'HTML'
//		}
//	); 
//	*/
//
//	lr.thinkTime(12);
///* Removed by Async CodeGen.
//ID = Poll_1
// */
//	/*
// web.customRequest(
//		{
//			name : '819254_11', 
//			url : 'http://private.proverki.local/erknm-editors/api/knm/819254', 
//			method : 'PUT', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't477.inf', 
//			mode : 'HTML'
//		}
//	); 
//	*/
//
///* Added by Async CodeGen.
//ID = Poll_1
// */
//	web.stopAsync(
//		{
//			id : 'Poll_1'
//		}
//	);
//
//	// Connection ID 6 received buffer WebSocketReceive12
//	// Connection ID 7 received buffer WebSocketReceive13
//	web.revertAutoHeader('Origin');
//
//	web.url(
//		{
//			name : 'published_17', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/news/published?type=ANNOUNCEMENT&order=published,desc;', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knms', 
//			snapshot : 't478.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'settings_7', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/settings', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knms', 
//			snapshot : 't479.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'schedule_7', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/settings/schedule', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knms', 
//			snapshot : 't480.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.addHeader('Origin', 
//		'http://private.proverki.local');
//
//	web.customRequest(
//		{
//			name : 'find-indexes_7', 
//			url : 'http://private.proverki.local/erknm-index/api/knm/find-indexes?page=0&size=50&order=erpId%2Casc', 
//			method : 'POST', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knms', 
//			snapshot : 't481.inf', 
//			mode : 'HTML', 
//			encType : 'application/json', 
//			body : '{\"version\":\"ERKNM\"}'
//		}
//	);
//
//	web.addHeader('Upgrade-Insecure-Requests', 
//		'1');
//
//	lr.thinkTime(6);
//	web.url(
//		{
//			name : '813655', 
//			url : 'http://private.proverki.local/private/knm/813655', 
//			resource : 0, 
//			recContentType : 'text/html', 
//			referer : '', 
//			snapshot : 't482.inf', 
//			mode : 'HTML', 
//			extraRes :  [
//				{url : '/erknm-catalogs/api/public-portal-url'}
//			]
//		}
//	);
//
//	web.url(
//		{
//			name : 'extendedprofile_9', 
//			url : 'http://private.proverki.local/public/api/access-manager/api/users/current/extendedprofile', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't483.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'organizations_22', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/general-info/organizations', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't484.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'knm-expert-types_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-expert-types', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't485.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'checklist-answer-types_5', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/checklist-answer-types', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't486.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'knm-document-types_7', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-document-types', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't487.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'knm-responsible-types_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-responsible-types', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't488.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'knm-notice-methods_5', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/knm-notice-methods', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't489.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'knm-document-types_8', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/knm-document-types', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't490.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'knm-types_5', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/knm-types?enabled_248=true', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't491.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.url(
//		{
//			name : 'responsibility-type_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/responsibility-type', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't492.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'kind-result-decision_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/kind-result-decision', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't493.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'acquaintance-types_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/acquaintance-types', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't494.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'organizations_23', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/general-info/organizations?withDistrict=true', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't495.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : '813655_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/knm/813655', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't496.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'danger-class_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/danger-class', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't497.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'knm-reason-types_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-reason-types?isPm=false&isPlanned=false', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't498.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'kno-organizations_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/kno-organizations', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't499.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'roles_7', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/admin/news/roles', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't500.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'published_18', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/news/published?type=ANNOUNCEMENT&order=published,desc;', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't501.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'knm-reject-reason-types_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-reject-reason-types?isPlaned=false', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't502.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'knm-plan-reason-change-types_5', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-plan-reason-change-types', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't503.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'links_5', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/knm/813655/links', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't504.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.addHeader('Origin', 
//		'http://private.proverki.local');
//
//	web.customRequest(
//		{
//			name : '813655_3', 
//			url : 'http://private.proverki.local/erknm-editors/api/knm/813655', 
//			method : 'PUT', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't505.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'okved_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/registry/export/okved?inn=7811689828&ogrn=1187847106699', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't506.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '0ae96452-7a6d-1eab-817a-75be2a8700d9_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/b6fc9844-a528-11eb-bcbc-0242ac130002/0ae96452-7a6d-1eab-817a-75be2a8700d9', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't507.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '0af4cd2e-78cb-109b-8178-e92043ff007e', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/af002594-a4f0-11eb-bcbc-0242ac130002/0af4cd2e-78cb-109b-8178-e92043ff007e', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't508.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '0af4cd2e-78cb-109b-8178-e9812c9e028d', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/1f27d942-a52e-11eb-bcbc-0242ac130002/0af4cd2e-78cb-109b-8178-e9812c9e028d', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't509.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '0ae96452-7a6d-1eab-817a-75d4d7b60150', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/003d7ce8-c474-11eb-8529-0242ac130003/0ae96452-7a6d-1eab-817a-75d4d7b60150', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't510.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'd2ec803a-a53e-11eb-bcbc-0242ac130063', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/d2ec803a-a53e-11eb-bcbc-0242ac130002/d2ec803a-a53e-11eb-bcbc-0242ac130063', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't511.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '0ae94760-7a6d-1f16-817a-75cbe2500111', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/003d7ce8-c474-11eb-8529-0242ac130003/0ae94760-7a6d-1f16-817a-75cbe2500111', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't512.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '0ae96452-7a6d-1eab-817a-75cdaa8b011f', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/003d7ce8-c474-11eb-8529-0242ac130003/0ae96452-7a6d-1eab-817a-75cdaa8b011f', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't513.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '0ae94760-7a6d-1f16-817a-75bd23e900c9', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/b6fc9844-a528-11eb-bcbc-0242ac130002/0ae94760-7a6d-1f16-817a-75bd23e900c9', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't514.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '0ae94760-7a6d-1f16-817a-75ca17810106', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/003d7ce8-c474-11eb-8529-0242ac130003/0ae94760-7a6d-1f16-817a-75ca17810106', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't515.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '0ae96452-7a6d-1eab-817a-75c9c4420102', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/003d7ce8-c474-11eb-8529-0242ac130003/0ae96452-7a6d-1eab-817a-75c9c4420102', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't516.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'okved_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/registry/export/okved?inn=7811689828&ogrn=1187847106699', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't517.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '0af4cd2e-78cb-109b-8178-ea2e8d46040d', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/641d3956-a5b1-11eb-bcbc-0242ac130002/0af4cd2e-78cb-109b-8178-ea2e8d46040d', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't518.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '0ae94760-7a6d-1f16-817a-71336165000c', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/641d3e60-a5b1-11eb-bcbc-0242ac130002/0ae94760-7a6d-1f16-817a-71336165000c', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't519.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '03ea99db-82c7-4ff4-8074-cdb722439e44', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/a43f056e-b95c-11eb-8529-0242ac130003/03ea99db-82c7-4ff4-8074-cdb722439e44', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't520.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '0af4cd2e-78cb-109b-8178-d5aaf14d002c', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/18d790d4-a5a9-11eb-bcbc-0242ac130002/0af4cd2e-78cb-109b-8178-d5aaf14d002c', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't521.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'aae78350-bdfd-12eb-8529-0242ac130013', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/aae78350-bdfd-12eb-8529-0242ac130003/aae78350-bdfd-12eb-8529-0242ac130013', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't522.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '0ae94760-7a6d-1f16-817a-75d525bb0145', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/003d7ce8-c474-11eb-8529-0242ac130003/0ae94760-7a6d-1f16-817a-75d525bb0145', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't523.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '5_5', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/knm-reason-types/5', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't524.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '0ae94760-7a6d-1f16-817a-75cbe2500111_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/003d7ce8-c474-11eb-8529-0242ac130003/0ae94760-7a6d-1f16-817a-75cbe2500111', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't525.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : '5_6', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/knm-reject-reason-types/5', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't526.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'okved_4', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/registry/export/okved?inn=7811689828&ogrn=1187847106699', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't527.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '0ae94760-7a6d-1f16-817a-71336165000c_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/641d3e60-a5b1-11eb-bcbc-0242ac130002/0ae94760-7a6d-1f16-817a-71336165000c', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't528.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'okved_5', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/registry/export/okved?inn=7811689828&ogrn=1187847106699', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't529.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'okved_6', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/registry/export/okved?inn=7811689828&ogrn=1187847106699', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't530.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'supervision-type_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/supervision-type?uuids=0af4cd2e-78cb-109b-8178-e92043ff007e', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't531.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'check-list_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/check-list?uuidKno=0af4cd2e-78cb-109b-8178-e92043ff007e&uuidSupervision=0af4cd2e-78cb-109b-8178-e9812c9e028d', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't532.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.url(
//		{
//			name : 'get-kno-supervision-uuid_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/constraint/get-kno-supervision-uuid?knoVersionId=0af4cd2e-78cb-109b-8178-e92043ff007e&supervisionVersionId=0af4cd2e-78cb-109b-8178-e9812c9e028d', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't533.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'requirement_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/requirement?uuidKno=0af4cd2e-78cb-109b-8178-e92043ff007e&uuidSupervision=0af4cd2e-78cb-109b-8178-e9812c9e028d', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't534.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'knm-kind_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/knm-kind?uniqueUuid=2ef9aa31-c480-48e4-86db-c717ce1596b0', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't535.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'positions_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/positions?uniqueUuid=2ef9aa31-c480-48e4-86db-c717ce1596b0', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't536.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'subject-type_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/subject-type?uniqueUuid=2ef9aa31-c480-48e4-86db-c717ce1596b0', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't537.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'participant-positions_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/participant-positions?uniqueUuid=2ef9aa31-c480-48e4-86db-c717ce1596b0', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't538.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.url(
//		{
//			name : 'get-event-uuid_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/constraint/get-event-uuid?knoSupervisionId=2ef9aa31-c480-48e4-86db-c717ce1596b0&knmKindId=d2ec803a-a53e-11eb-bcbc-0242ac130063', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't539.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'accepted-document_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/accepted-document?uniqueUuid=2ef9aa31-c480-48e4-86db-c717ce1596b0', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't540.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'risk-indicatory_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/risk-indicatory?uniqueUuid=2ef9aa31-c480-48e4-86db-c717ce1596b0', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't541.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'subject-sub-kind_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/subject-sub-kind?uniqueUuid=2ef9aa31-c480-48e4-86db-c717ce1596b0', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't542.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'subject-kind_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/subject-kind?uniqueUuid=2ef9aa31-c480-48e4-86db-c717ce1596b0', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't543.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'risk-category_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/risk-category?uniqueUuid=1a7e898d-b323-42a9-bd25-05f6a7e01726', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't544.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'event-type_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/event-type?uniqueUuidEvent=1a7e898d-b323-42a9-bd25-05f6a7e01726', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't546.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.addAutoHeader('Origin', 
//		'http://private.proverki.local');
//
//	lr.thinkTime(6);
///* Added by Async CodeGen.
//ID=Poll_3
//ScanType = Recording
//
//The following URLs are considered part of this conversation:
//	http://private.proverki.local/erknm-editors/api/knm/813655
//
//TODO - The following callbacks have been added to AsyncCallbacks.c.
//Add your code to the callback implementations as necessary.
//	Poll_3_RequestCB
//	Poll_3_ResponseCB
// */
//	web.regAsyncAttributes(
//		{
//			id : 'Poll_3', 
//			pattern : 'Poll', 
//			url : 'http://private.proverki.local/erknm-editors/api/knm/813655', 
//			pollIntervalMs : 4000, 
//			requestCB : 'Poll_3_RequestCB', 
//			responseCB : 'Poll_3_ResponseCB'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '813655_4', 
//			url : 'http://private.proverki.local/erknm-editors/api/knm/813655', 
//			method : 'PUT', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't547.inf', 
//			mode : 'HTML'
//		}
//	);
//
///* Removed by Async CodeGen.
//ID = Poll_3
// */
//	/*
// web.customRequest(
//		{
//			name : '813655_5', 
//			url : 'http://private.proverki.local/erknm-editors/api/knm/813655', 
//			method : 'PUT', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't548.inf', 
//			mode : 'HTML'
//		}
//	); 
//	*/
//
///* Removed by Async CodeGen.
//ID = Poll_3
// */
//	/*
// web.customRequest(
//		{
//			name : '813655_6', 
//			url : 'http://private.proverki.local/erknm-editors/api/knm/813655', 
//			method : 'PUT', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't549.inf', 
//			mode : 'HTML'
//		}
//	); 
//	*/
//
///* Removed by Async CodeGen.
//ID = Poll_3
// */
//	/*
// web.customRequest(
//		{
//			name : '813655_7', 
//			url : 'http://private.proverki.local/erknm-editors/api/knm/813655', 
//			method : 'PUT', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't550.inf', 
//			mode : 'HTML'
//		}
//	); 
//	*/
//
//	lr.thinkTime(16);
///* Removed by Async CodeGen.
//ID = Poll_3
// */
//	/*
// web.customRequest(
//		{
//			name : '813655_8', 
//			url : 'http://private.proverki.local/erknm-editors/api/knm/813655', 
//			method : 'PUT', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/813655', 
//			snapshot : 't552.inf', 
//			mode : 'HTML'
//		}
//	); 
//	*/
//
///* Added by Async CodeGen.
//ID = Poll_3
// */
//	web.stopAsync(
//		{
//			id : 'Poll_3'
//		}
//	);
//
//	web.revertAutoHeader('Origin');
//
//	web.customRequest(
//		{
//			name : 'settings_8', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/settings', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knms', 
//			snapshot : 't553.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'published_19', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/news/published?type=ANNOUNCEMENT&order=published,desc;', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knms', 
//			snapshot : 't554.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'schedule_8', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/settings/schedule', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knms', 
//			snapshot : 't555.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.addHeader('Origin', 
//		'http://private.proverki.local');
//
//	web.customRequest(
//		{
//			name : 'find-indexes_8', 
//			url : 'http://private.proverki.local/erknm-index/api/knm/find-indexes?page=0&size=50&order=erpId%2Casc', 
//			method : 'POST', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knms', 
//			snapshot : 't556.inf', 
//			mode : 'HTML', 
//			encType : 'application/json', 
//			body : '{\"version\":\"ERKNM\"}'
//		}
//	);
//
//	web.addHeader('Upgrade-Insecure-Requests', 
//		'1');
//
//	web.url(
//		{
//			name : '819254_12', 
//			url : 'http://private.proverki.local/private/knm/819254', 
//			resource : 0, 
//			referer : '', 
//			snapshot : 't557.inf', 
//			mode : 'HTML', 
//			extraRes :  [
//				{url : '/erknm-catalogs/api/public-portal-url'}
//			]
//		}
//	);
//
//	web.url(
//		{
//			name : 'extendedprofile_10', 
//			url : 'http://private.proverki.local/public/api/access-manager/api/users/current/extendedprofile', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't558.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'organizations_24', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/general-info/organizations', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't559.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'checklist-answer-types_6', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/checklist-answer-types', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't560.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'knm-document-types_9', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/knm-document-types', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't561.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'knm-notice-methods_6', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/knm-notice-methods', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't562.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'knm-document-types_10', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-document-types', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't563.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'knm-expert-types_4', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-expert-types', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't564.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'knm-responsible-types_4', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-responsible-types', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't565.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'responsibility-type_4', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/responsibility-type', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't566.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'acquaintance-types_4', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/acquaintance-types', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't567.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'knm-types_6', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/knm-types?enabled_248=true', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't568.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'kind-result-decision_4', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/kind-result-decision', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't569.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'organizations_25', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/general-info/organizations?withDistrict=true', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't570.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'knm-reason-types_4', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-reason-types?isPm=false&isPlanned=false', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't571.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.url(
//		{
//			name : 'roles_8', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/admin/news/roles', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't572.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : '819254_13', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/knm/819254', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't573.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'published_20', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/news/published?type=ANNOUNCEMENT&order=published,desc;', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't574.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'danger-class_4', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/danger-class', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't575.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'kno-organizations_4', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/kno-organizations', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't576.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'knm-reject-reason-types_4', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-reject-reason-types?isPlaned=false', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't577.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'knm-plan-reason-change-types_6', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-plan-reason-change-types', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't578.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.addHeader('Origin', 
//		'http://private.proverki.local');
//
//	web.customRequest(
//		{
//			name : '819254_14', 
//			url : 'http://private.proverki.local/erknm-editors/api/knm/819254', 
//			method : 'PUT', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't579.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '0ae95284-79cd-16d7-817a-0fce4d560592_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/af002594-a4f0-11eb-bcbc-0242ac130002/0ae95284-79cd-16d7-817a-0fce4d560592', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't580.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '0ae96452-7a6d-1eab-817a-75be2a8700d9_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/b6fc9844-a528-11eb-bcbc-0242ac130002/0ae96452-7a6d-1eab-817a-75be2a8700d9', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't581.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '0af4cd2e-78cb-109b-8178-e981258701db_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/1f27d942-a52e-11eb-bcbc-0242ac130002/0af4cd2e-78cb-109b-8178-e981258701db', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't582.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'd2ec803a-a53e-11eb-bcbc-0242ac130053_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/d2ec803a-a53e-11eb-bcbc-0242ac130002/d2ec803a-a53e-11eb-bcbc-0242ac130053', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't583.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : 'links_6', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/knm/819254/links', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't584.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '0af4cd2e-78cb-109b-8178-d5a7ba1b0018_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/f0f9a79a-a5b3-11eb-bcbc-0242ac130002/0af4cd2e-78cb-109b-8178-d5a7ba1b0018', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't585.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'ccbc95b6-2570-434d-bae0-918cf5be156a_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/a43f056e-b95c-11eb-8529-0242ac130003/ccbc95b6-2570-434d-bae0-918cf5be156a', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't586.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '7a322fc0-a08d-468a-b6e2-6e61b6c2d475_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/a43f056e-b95c-11eb-8529-0242ac130003/7a322fc0-a08d-468a-b6e2-6e61b6c2d475', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't587.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '5_7', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/knm-reason-types/5', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't588.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'a73bdd66-6426-46eb-a1e3-930ea7049b87_2', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/a43f056e-b95c-11eb-8529-0242ac130003/a73bdd66-6426-46eb-a1e3-930ea7049b87', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't589.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.url(
//		{
//			name : '5_8', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/catalogs/knm-reject-reason-types/5', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't590.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'supervision-type_4', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/supervision-type?uuids=0ae95284-79cd-16d7-817a-0fce4d560592', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't591.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'check-list_4', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/check-list?uuidKno=0ae95284-79cd-16d7-817a-0fce4d560592&uuidSupervision=0af4cd2e-78cb-109b-8178-e981258701db', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't592.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.url(
//		{
//			name : 'get-kno-supervision-uuid_4', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/constraint/get-kno-supervision-uuid?knoVersionId=0ae95284-79cd-16d7-817a-0fce4d560592&supervisionVersionId=0af4cd2e-78cb-109b-8178-e981258701db', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't593.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'requirement_4', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/requirement?uuidKno=0ae95284-79cd-16d7-817a-0fce4d560592&uuidSupervision=0af4cd2e-78cb-109b-8178-e981258701db', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't594.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'knm-kind_4', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/knm-kind?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't595.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'positions_4', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/positions?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't596.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'subject-type_4', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/subject-type?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't597.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'participant-positions_4', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/participant-positions?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't598.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'subject-sub-kind_4', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/subject-sub-kind?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't599.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'accepted-document_4', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/accepted-document?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't600.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.url(
//		{
//			name : 'get-event-uuid_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/constraint/get-event-uuid?knoSupervisionId=c51b895a-6c36-499b-a038-6f18aa7c2032&knmKindId=d2ec803a-a53e-11eb-bcbc-0242ac130053', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't601.inf', 
//			mode : 'HTML'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'risk-indicatory_4', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/risk-indicatory?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't602.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'subject-kind_4', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/subject-kind?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't603.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'risk-category_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/risk-category?uniqueUuid=c6bdabdf-f10d-4a96-ba21-c7976b73ac85', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't604.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : 'event-type_3', 
//			url : 'http://private.proverki.local/erknm-catalogs/api/dictionaries/event-type?uniqueUuidEvent=c6bdabdf-f10d-4a96-ba21-c7976b73ac85', 
//			method : 'GET', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't605.inf', 
//			mode : 'HTML', 
//			encType : 'application/json'
//		}
//	);
//
//	web.addAutoHeader('Origin', 
//		'http://private.proverki.local');
//
//	lr.thinkTime(8);
///* Added by Async CodeGen.
//ID=Poll_2
//ScanType = Recording
//
//The following URLs are considered part of this conversation:
//	http://private.proverki.local/erknm-editors/api/knm/819254
//
//TODO - The following callbacks have been added to AsyncCallbacks.c.
//Add your code to the callback implementations as necessary.
//	Poll_2_RequestCB
//	Poll_2_ResponseCB
// */
//	web.regAsyncAttributes(
//		{
//			id : 'Poll_2', 
//			pattern : 'Poll', 
//			url : 'http://private.proverki.local/erknm-editors/api/knm/819254', 
//			pollIntervalMs : 4000, 
//			requestCB : 'Poll_2_RequestCB', 
//			responseCB : 'Poll_2_ResponseCB'
//		}
//	);
//
//	web.customRequest(
//		{
//			name : '819254_15', 
//			url : 'http://private.proverki.local/erknm-editors/api/knm/819254', 
//			method : 'PUT', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't606.inf', 
//			mode : 'HTML'
//		}
//	);
//
///* Removed by Async CodeGen.
//ID = Poll_2
// */
//	/*
// web.customRequest(
//		{
//			name : '819254_16', 
//			url : 'http://private.proverki.local/erknm-editors/api/knm/819254', 
//			method : 'PUT', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't607.inf', 
//			mode : 'HTML'
//		}
//	); 
//	*/
//
///* Removed by Async CodeGen.
//ID = Poll_2
// */
//	/*
// web.customRequest(
//		{
//			name : '819254_17', 
//			url : 'http://private.proverki.local/erknm-editors/api/knm/819254', 
//			method : 'PUT', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't608.inf', 
//			mode : 'HTML'
//		}
//	); 
//	*/
//
//	// Connection ID 6 received buffer WebSocketReceive14
//	
//
///* Removed by Async CodeGen.
//ID = Poll_2
// */
//	/*
// web.customRequest(
//		{
//			name : '819254_18', 
//			url : 'http://private.proverki.local/erknm-editors/api/knm/819254', 
//			method : 'PUT', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't609.inf', 
//			mode : 'HTML'
//		}
//	); 
//	*/
//
//	// Connection ID 7 received buffer WebSocketReceive15
//	
//
///* Removed by Async CodeGen.
//ID = Poll_2
// */
//	/*
// web.customRequest(
//		{
//			name : '819254_19', 
//			url : 'http://private.proverki.local/erknm-editors/api/knm/819254', 
//			method : 'PUT', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't610.inf', 
//			mode : 'HTML'
//		}
//	); 
//	*/
//
//	lr.thinkTime(20);
///* Removed by Async CodeGen.
//ID = Poll_2
// */
//	/*
// web.customRequest(
//		{
//			name : '819254_20', 
//			url : 'http://private.proverki.local/erknm-editors/api/knm/819254', 
//			method : 'PUT', 
//			resource : 0, 
//			recContentType : 'application/json', 
//			referer : 'http://private.proverki.local/private/knm/819254', 
//			snapshot : 't611.inf', 
//			mode : 'HTML'
//		}
//	); 
//	*/
//
///* Added by Async CodeGen.
//ID = Poll_2
// */
//	web.stopAsync(
//		{
//			id : 'Poll_2'
//		}
//	);
//
//	return 0;
}
