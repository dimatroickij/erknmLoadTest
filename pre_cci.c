# 1 "f:\\erknm\\erknm\\\\combined_ERKNM.c"
# 1 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/lrun.h" 1
 
 












 











# 103 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/lrun.h"





















































		


		typedef unsigned size_t;
	
	
        
	

















	

 



















 
 
 
 
 


 
 
 
 
 
 














int     lr_start_transaction   (char * transaction_name);
int lr_start_sub_transaction          (char * transaction_name, char * trans_parent);
long lr_start_transaction_instance    (char * transaction_name, long parent_handle);
int   lr_start_cross_vuser_transaction		(char * transaction_name, char * trans_id_param); 



int     lr_end_transaction     (char * transaction_name, int status);
int lr_end_sub_transaction            (char * transaction_name, int status);
int lr_end_transaction_instance       (long transaction, int status);
int   lr_end_cross_vuser_transaction	(char * transaction_name, char * trans_id_param, int status);


 
typedef char* lr_uuid_t;
 



lr_uuid_t lr_generate_uuid();

 


int lr_generate_uuid_free(lr_uuid_t uuid);

 



int lr_generate_uuid_on_buf(lr_uuid_t buf);

   
# 273 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/lrun.h"
int lr_start_distributed_transaction  (char * transaction_name, lr_uuid_t correlator, long timeout  );

   







int lr_end_distributed_transaction  (lr_uuid_t correlator, int status);


double lr_stop_transaction            (char * transaction_name);
double lr_stop_transaction_instance   (long parent_handle);


void lr_resume_transaction           (char * trans_name);
void lr_resume_transaction_instance  (long trans_handle);


int lr_update_transaction            (const char *trans_name);


 
void lr_wasted_time(long time);


 
int lr_set_transaction(const char *name, double duration, int status);
 
long lr_set_transaction_instance(const char *name, double duration, int status, long parent_handle);


int   lr_user_data_point                      (char *, double);
long lr_user_data_point_instance                   (char *, double, long);
 



int lr_user_data_point_ex(const char *dp_name, double value, int log_flag);
long lr_user_data_point_instance_ex(const char *dp_name, double value, long parent_handle, int log_flag);


int lr_transaction_add_info      (const char *trans_name, char *info);
int lr_transaction_instance_add_info   (long trans_handle, char *info);
int lr_dpoint_add_info           (const char *dpoint_name, char *info);
int lr_dpoint_instance_add_info        (long dpoint_handle, char *info);


double lr_get_transaction_duration       (char * trans_name);
double lr_get_trans_instance_duration    (long trans_handle);
double lr_get_transaction_think_time     (char * trans_name);
double lr_get_trans_instance_think_time  (long trans_handle);
double lr_get_transaction_wasted_time    (char * trans_name);
double lr_get_trans_instance_wasted_time (long trans_handle);
int    lr_get_transaction_status		 (char * trans_name);
int	   lr_get_trans_instance_status		 (long trans_handle);

 



int lr_set_transaction_status(int status);

 



int lr_set_transaction_status_by_name(int status, const char *trans_name);
int lr_set_transaction_instance_status(int status, long trans_handle);


typedef void* merc_timer_handle_t;
 

merc_timer_handle_t lr_start_timer();
double lr_end_timer(merc_timer_handle_t timer_handle);


 
 
 
 
 
 











 



int   lr_rendezvous  (char * rendezvous_name);
 




int   lr_rendezvous_ex (char * rendezvous_name);



 
 
 
 
 
char *lr_get_vuser_ip (void);
void   lr_whoami (int *vuser_id, char ** sgroup, int *scid);
char *	  lr_get_host_name (void);
char *	  lr_get_master_host_name (void);

 
long     lr_get_attrib_long	(char * attr_name);
char *   lr_get_attrib_string	(char * attr_name);
double   lr_get_attrib_double      (char * attr_name);

char * lr_paramarr_idx(const char * paramArrayName, unsigned int index);
char * lr_paramarr_random(const char * paramArrayName);
int    lr_paramarr_len(const char * paramArrayName);

int	lr_param_unique(const char * paramName);
int lr_param_sprintf(const char * paramName, const char * format, ...);


 
 
static void *ci_this_context = 0;






 








void lr_continue_on_error (int lr_continue);
char *   lr_unmask (const char *EncodedString);
char *   lr_decrypt (const char *EncodedString);


 
 
 
 
 
 



 







 















void   lr_abort (void);
void lr_exit(int exit_option, int exit_status);
void lr_abort_ex (unsigned long flags);

void   lr_peek_events (void);


 
 
 
 
 


void   lr_think_time (double secs);

 


void lr_force_think_time (double secs);


 
 
 
 
 



















int   lr_msg (char * fmt, ...);
int   lr_debug_message (unsigned int msg_class,
									    char * format,
										...);
# 513 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/lrun.h"
void   lr_new_prefix (int type,
                                 char * filename,
                                 int line);
# 516 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/lrun.h"
int   lr_log_message (char * fmt, ...);
int   lr_message (char * fmt, ...);
int   lr_error_message (char * fmt, ...);
int   lr_output_message (char * fmt, ...);
int   lr_vuser_status_message (char * fmt, ...);
int   lr_error_message_without_fileline (char * fmt, ...);
int   lr_fail_trans_with_error (char * fmt, ...);

 
 
 
 
 
# 540 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/lrun.h"

 
 
 
 
 





int   lr_next_row ( char * table);
int lr_advance_param ( char * param);



														  
														  

														  
														  

													      
 


char *   lr_eval_string (char * str);
int   lr_eval_string_ext (const char *in_str,
                                     unsigned long const in_len,
                                     char ** const out_str,
                                     unsigned long * const out_len,
                                     unsigned long const options,
                                     const char *file,
								     long const line);
# 574 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/lrun.h"
void   lr_eval_string_ext_free (char * * pstr);

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
int lr_param_increment (char * dst_name,
                              char * src_name);
# 597 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/lrun.h"













											  
											  

											  
											  
											  

int	  lr_save_var (char *              param_val,
							  unsigned long const param_val_len,
							  unsigned long const options,
							  char *			  param_name);
# 621 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/lrun.h"
int   lr_save_string (const char * param_val, const char * param_name);



int   lr_set_custom_error_message (const char * param_val, ...);

int   lr_remove_custom_error_message ();


int   lr_free_parameter (const char * param_name);
int   lr_save_int (const int param_val, const char * param_name);
int   lr_save_timestamp (const char * tmstampParam, ...);
int   lr_save_param_regexp (const char *bufferToScan, unsigned int bufSize, ...);

int   lr_convert_double_to_integer (const char *source_param_name, const char * target_param_name);
int   lr_convert_double_to_double (const char *source_param_name, const char *format_string, const char * target_param_name);

 
 
 
 
 
 
# 700 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/lrun.h"
void   lr_save_datetime (const char *format, int offset, const char *name);









 











 
 
 
 
 






 



char * lr_error_context_get_entry (char * key);

 



long   lr_error_context_get_error_id (void);


 
 
 

int lr_table_get_rows_num (char * param_name);

int lr_table_get_cols_num (char * param_name);

char * lr_table_get_cell_by_col_index (char * param_name, int row, int col);

char * lr_table_get_cell_by_col_name (char * param_name, int row, const char* col_name);

int lr_table_get_column_name_by_index (char * param_name, int col, 
											char * * const col_name,
											size_t * col_name_len);
# 761 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/lrun.h"

int lr_table_get_column_name_by_index_free (char * col_name);

 
 
 
 
# 776 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/lrun.h"
int   lr_zip (const char* param1, const char* param2);
int   lr_unzip (const char* param1, const char* param2);

 
 
 
 
 
 
 
 

 
 
 
 
 
 
int   lr_param_substit (char * file,
                                   int const line,
                                   char * in_str,
                                   size_t const in_len,
                                   char * * const out_str,
                                   size_t * const out_len);
# 800 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/lrun.h"
void   lr_param_substit_free (char * * pstr);


 
# 812 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/lrun.h"





char *   lrfnc_eval_string (char * str,
                                      char * file_name,
                                      long const line_num);
# 820 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/lrun.h"


int   lrfnc_save_string ( const char * param_val,
                                     const char * param_name,
                                     const char * file_name,
                                     long const line_num);
# 826 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/lrun.h"

int   lrfnc_free_parameter (const char * param_name );







typedef struct _lr_timestamp_param
{
	int iDigits;
}lr_timestamp_param;

extern const lr_timestamp_param default_timestamp_param;

int   lrfnc_save_timestamp (const char * param_name, const lr_timestamp_param* time_param);

int lr_save_searched_string(char * buffer, long buf_size, unsigned int occurrence,
			    char * search_string, int offset, unsigned int param_val_len, 
			    char * param_name);

 
char *   lr_string (char * str);

 
# 929 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/lrun.h"

int   lr_save_value (char * param_val,
                                unsigned long const param_val_len,
                                unsigned long const options,
                                char * param_name,
                                char * file_name,
                                long const line_num);
# 936 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/lrun.h"


 
 
 
 
 











int   lr_printf (char * fmt, ...);
 
int   lr_set_debug_message (unsigned int msg_class,
                                       unsigned int swtch);
# 958 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/lrun.h"
unsigned int   lr_get_debug_message (void);


 
 
 
 
 

void   lr_double_think_time ( double secs);
void   lr_usleep (long);


 
 
 
 
 
 




int *   lr_localtime (long offset);


int   lr_send_port (long port);


# 1034 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/lrun.h"



struct _lr_declare_identifier{
	char signature[24];
	char value[128];
};

int   lr_pt_abort (void);

void vuser_declaration (void);






# 1063 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/lrun.h"


# 1075 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/lrun.h"
















 
 
 
 
 







int    _lr_declare_transaction   (char * transaction_name);


 
 
 
 
 







int   _lr_declare_rendezvous  (char * rendezvous_name);

 
 
 
 
 


typedef int PVCI;






typedef int VTCERR;









PVCI   vtc_connect(char * servername, int portnum, int options);
VTCERR   vtc_disconnect(PVCI pvci);
VTCERR   vtc_get_last_error(PVCI pvci);
VTCERR   vtc_query_column(PVCI pvci, char * columnName, int columnIndex, char * *outvalue);
VTCERR   vtc_query_row(PVCI pvci, int rowIndex, char * **outcolumns, char * **outvalues);
VTCERR   vtc_send_message(PVCI pvci, char * column, char * message, unsigned short *outRc);
VTCERR   vtc_send_if_unique(PVCI pvci, char * column, char * message, unsigned short *outRc);
VTCERR   vtc_send_row1(PVCI pvci, char * columnNames, char * messages, char * delimiter, unsigned char sendflag, unsigned short *outUpdates);
VTCERR   vtc_update_message(PVCI pvci, char * column, int index , char * message, unsigned short *outRc);
VTCERR   vtc_update_message_ifequals(PVCI pvci, char * columnName, int index,	char * message, char * ifmessage, unsigned short 	*outRc);
VTCERR   vtc_update_row1(PVCI pvci, char * columnNames, int index , char * messages, char * delimiter, unsigned short *outUpdates);
VTCERR   vtc_retrieve_message(PVCI pvci, char * column, char * *outvalue);
VTCERR   vtc_retrieve_messages1(PVCI pvci, char * columnNames, char * delimiter, char * **outvalues);
VTCERR   vtc_retrieve_row(PVCI pvci, char * **outcolumns, char * **outvalues);
VTCERR   vtc_rotate_message(PVCI pvci, char * column, char * *outvalue, unsigned char sendflag);
VTCERR   vtc_rotate_messages1(PVCI pvci, char * columnNames, char * delimiter, char * **outvalues, unsigned char sendflag);
VTCERR   vtc_rotate_row(PVCI pvci, char * **outcolumns, char * **outvalues, unsigned char sendflag);
VTCERR   vtc_increment(PVCI pvci, char * column, int index , int incrValue, int *outValue);
VTCERR   vtc_clear_message(PVCI pvci, char * column, int index , unsigned short *outRc);
VTCERR   vtc_clear_column(PVCI pvci, char * column, unsigned short *outRc);
VTCERR   vtc_ensure_index(PVCI pvci, char * column, unsigned short *outRc);
VTCERR   vtc_drop_index(PVCI pvci, char * column, unsigned short *outRc);
VTCERR   vtc_clear_row(PVCI pvci, int rowIndex, unsigned short *outRc);
VTCERR   vtc_create_column(PVCI pvci, char * column,unsigned short *outRc);
VTCERR   vtc_column_size(PVCI pvci, char * column, int *size);
void   vtc_free(char * msg);
void   vtc_free_list(char * *msglist);

VTCERR   lrvtc_connect(char * servername, int portnum, int options);
VTCERR   lrvtc_disconnect();
VTCERR   lrvtc_query_column(char * columnName, int columnIndex);
VTCERR   lrvtc_query_row(int columnIndex);
VTCERR   lrvtc_send_message(char * columnName, char * message);
VTCERR   lrvtc_send_if_unique(char * columnName, char * message);
VTCERR   lrvtc_send_row1(char * columnNames, char * messages, char * delimiter, unsigned char sendflag);
VTCERR   lrvtc_update_message(char * columnName, int index , char * message);
VTCERR   lrvtc_update_message_ifequals(char * columnName, int index, char * message, char * ifmessage);
VTCERR   lrvtc_update_row1(char * columnNames, int index , char * messages, char * delimiter);
VTCERR   lrvtc_retrieve_message(char * columnName);
VTCERR   lrvtc_retrieve_messages1(char * columnNames, char * delimiter);
VTCERR   lrvtc_retrieve_row();
VTCERR   lrvtc_rotate_message(char * columnName, unsigned char sendflag);
VTCERR   lrvtc_rotate_messages1(char * columnNames, char * delimiter, unsigned char sendflag);
VTCERR   lrvtc_rotate_row(unsigned char sendflag);
VTCERR   lrvtc_increment(char * columnName, int index , int incrValue);
VTCERR   lrvtc_noop();
VTCERR   lrvtc_clear_message(char * columnName, int index);
VTCERR   lrvtc_clear_column(char * columnName); 
VTCERR   lrvtc_ensure_index(char * columnName); 
VTCERR   lrvtc_drop_index(char * columnName); 
VTCERR   lrvtc_clear_row(int rowIndex);
VTCERR   lrvtc_create_column(char * columnName);
VTCERR   lrvtc_column_size(char * columnName);



 
 
 
 
 

 
int lr_enable_ip_spoofing();
int lr_disable_ip_spoofing();


 




int lr_convert_string_encoding(char * sourceString, char * fromEncoding, char * toEncoding, char * paramName);
int lr_read_file(const char *filename, const char *outputParam, int continueOnError);

int lr_get_char_count(const char * string);


 
int lr_db_connect (char * pFirstArg, ...);
int lr_db_disconnect (char * pFirstArg,	...);
int lr_db_executeSQLStatement (char * pFirstArg, ...);
int lr_db_dataset_action(char * pFirstArg, ...);
int lr_checkpoint(char * pFirstArg,	...);
int lr_db_getvalue(char * pFirstArg, ...);







 
 



















# 1 "f:\\erknm\\erknm\\\\combined_ERKNM.c" 2

# 1 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/SharedParameter.h" 1



 
 
 
 
# 100 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/SharedParameter.h"






typedef int PVCI2;






typedef int VTCERR2;


 
 
 

 
extern PVCI2    vtc_connect(char *servername, int portnum, int options);
extern VTCERR2  vtc_disconnect(PVCI2 pvci);
extern VTCERR2  vtc_get_last_error(PVCI2 pvci);

 
extern VTCERR2  vtc_query_column(PVCI2 pvci, char *columnName, int columnIndex, char **outvalue);
extern VTCERR2  vtc_query_row(PVCI2 pvci, int columnIndex, char ***outcolumns, char ***outvalues);
extern VTCERR2  vtc_send_message(PVCI2 pvci, char *column, char *message, unsigned short *outRc);
extern VTCERR2  vtc_send_if_unique(PVCI2 pvci, char *column, char *message, unsigned short *outRc);
extern VTCERR2  vtc_send_row1(PVCI2 pvci, char *columnNames, char *messages, char *delimiter,  unsigned char sendflag, unsigned short *outUpdates);
extern VTCERR2  vtc_update_message(PVCI2 pvci, char *column, int index , char *message, unsigned short *outRc);
extern VTCERR2  vtc_update_message_ifequals(PVCI2 pvci, char	*columnName, int index,	char *message, char	*ifmessage,	unsigned short 	*outRc);
extern VTCERR2  vtc_update_row1(PVCI2 pvci, char *columnNames, int index , char *messages, char *delimiter, unsigned short *outUpdates);
extern VTCERR2  vtc_retrieve_message(PVCI2 pvci, char *column, char **outvalue);
extern VTCERR2  vtc_retrieve_messages1(PVCI2 pvci, char *columnNames, char *delimiter, char ***outvalues);
extern VTCERR2  vtc_retrieve_row(PVCI2 pvci, char ***outcolumns, char ***outvalues);
extern VTCERR2  vtc_rotate_message(PVCI2 pvci, char *column, char **outvalue, unsigned char sendflag);
extern VTCERR2  vtc_rotate_messages1(PVCI2 pvci, char *columnNames, char *delimiter, char ***outvalues, unsigned char sendflag);
extern VTCERR2  vtc_rotate_row(PVCI2 pvci, char ***outcolumns, char ***outvalues, unsigned char sendflag);
extern VTCERR2	vtc_increment(PVCI2 pvci, char *column, int index , int incrValue, int *outValue);
extern VTCERR2  vtc_clear_message(PVCI2 pvci, char *column, int index , unsigned short *outRc);
extern VTCERR2  vtc_clear_column(PVCI2 pvci, char *column, unsigned short *outRc);

extern VTCERR2  vtc_clear_row(PVCI2 pvci, int rowIndex, unsigned short *outRc);

extern VTCERR2  vtc_create_column(PVCI2 pvci, char *column,unsigned short *outRc);
extern VTCERR2  vtc_column_size(PVCI2 pvci, char *column, int *size);
extern VTCERR2  vtc_ensure_index(PVCI2 pvci, char *column, unsigned short *outRc);
extern VTCERR2  vtc_drop_index(PVCI2 pvci, char *column, unsigned short *outRc);

extern VTCERR2  vtc_noop(PVCI2 pvci);

 
extern void vtc_free(char *msg);
extern void vtc_free_list(char **msglist);

 


 




 




















 




 
 
 

extern VTCERR2  lrvtc_connect(char *servername, int portnum, int options);
extern VTCERR2  lrvtc_disconnect();
extern VTCERR2  lrvtc_query_column(char *columnName, int columnIndex);
extern VTCERR2  lrvtc_query_row(int columnIndex);
extern VTCERR2  lrvtc_send_message(char *columnName, char *message);
extern VTCERR2  lrvtc_send_if_unique(char *columnName, char *message);
extern VTCERR2  lrvtc_send_row1(char *columnNames, char *messages, char *delimiter,  unsigned char sendflag);
extern VTCERR2  lrvtc_update_message(char *columnName, int index , char *message);
extern VTCERR2  lrvtc_update_message_ifequals(char *columnName, int index, char 	*message, char *ifmessage);
extern VTCERR2  lrvtc_update_row1(char *columnNames, int index , char *messages, char *delimiter);
extern VTCERR2  lrvtc_retrieve_message(char *columnName);
extern VTCERR2  lrvtc_retrieve_messages1(char *columnNames, char *delimiter);
extern VTCERR2  lrvtc_retrieve_row();
extern VTCERR2  lrvtc_rotate_message(char *columnName, unsigned char sendflag);
extern VTCERR2  lrvtc_rotate_messages1(char *columnNames, char *delimiter, unsigned char sendflag);
extern VTCERR2  lrvtc_rotate_row(unsigned char sendflag);
extern VTCERR2  lrvtc_increment(char *columnName, int index , int incrValue);
extern VTCERR2  lrvtc_clear_message(char *columnName, int index);
extern VTCERR2  lrvtc_clear_column(char *columnName);
extern VTCERR2  lrvtc_clear_row(int rowIndex);
extern VTCERR2  lrvtc_create_column(char *columnName);
extern VTCERR2  lrvtc_column_size(char *columnName);
extern VTCERR2  lrvtc_ensure_index(char *columnName);
extern VTCERR2  lrvtc_drop_index(char *columnName);

extern VTCERR2  lrvtc_noop();

 
 
 

                               


 
 
 





















# 2 "f:\\erknm\\erknm\\\\combined_ERKNM.c" 2

# 1 "globals.h" 1



 
 

# 1 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/web_api.h" 1







# 1 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/as_web.h" 1



























































 




 



 











 





















 
 
 

  int
	web_add_filter(
		const char *		mpszArg,
		...
	);									 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 

  int
	web_add_auto_filter(
		const char *		mpszArg,
		...
	);									 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
	
  int
	web_add_auto_header(
		const char *		mpszHeader,
		const char *		mpszValue);

  int
	web_add_header(
		const char *		mpszHeader,
		const char *		mpszValue);
  int
	web_add_cookie(
		const char *		mpszCookie);
  int
	web_cleanup_auto_headers(void);
  int
	web_cleanup_cookies(void);
  int
	web_concurrent_end(
		const char * const	mpszReserved,
										 
		...								 
	);
  int
	web_concurrent_start(
		const char * const	mpszConcurrentGroupName,
										 
										 
		...								 
										 
	);
  int
	web_create_html_param(
		const char *		mpszParamName,
		const char *		mpszLeftDelim,
		const char *		mpszRightDelim);
  int
	web_create_html_param_ex(
		const char *		mpszParamName,
		const char *		mpszLeftDelim,
		const char *		mpszRightDelim,
		const char *		mpszNum);
  int
	web_custom_request(
		const char *		mpszReqestName,
		...);							 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
  int
	spdy_custom_request(
		const char *		mpszReqestName,
		...);							 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
  int
	web_disable_keep_alive(void);
  int
	web_enable_keep_alive(void);
  int
	web_find(
		const char *		mpszStepName,
		...);							 
										 
										 
										 
										 
										 
										 
										 
										 
										 
  int
	web_get_int_property(
		const int			miHttpInfoType);
  int
	web_image(
		const char *		mpszStepName,
		...);							 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
  int
	web_image_check(
		const char *		mpszName,
		...);
  int
	web_java_check(
		const char *		mpszName,
		...);
  int
	web_link(
		const char *		mpszStepName,
		...);							 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 

	
  int
	web_global_verification(
		const char *		mpszArg1,
		...);							 
										 
										 
										 
										 
										 
  int
	web_reg_find(
		const char *		mpszArg1,
		...);							 
										 
										 
										 
										 
										 
										 
										 
				
  int
	web_reg_save_param(
		const char *		mpszParamName,
		...);							 
										 
										 
										 
										 
										 
										 

  int
	web_convert_param(
		const char * 		mpszParamName, 
										 
		...);							 
										 
										 


										 

										 
  int
	web_remove_auto_filter(
		const char *		mpszArg,
		...
	);									 
										 
				
  int
	web_remove_auto_header(
		const char *		mpszHeaderName,
		...);							 
										 



  int
	web_remove_cookie(
		const char *		mpszCookie);

  int
	web_save_header(
		const char *		mpszType,	 
		const char *		mpszName);	 
  int
	web_set_certificate(
		const char *		mpszIndex);
  int
	web_set_certificate_ex(
		const char *		mpszArg1,
		...);							 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
  int
	web_set_connections_limit(
		const char *		mpszLimit);
  int
	web_set_max_html_param_len(
		const char *		mpszLen);
  int
	web_set_max_retries(
		const char *		mpszMaxRetries);
  int
	web_set_proxy(
		const char *		mpszProxyHost);
  int
	web_set_pac(
		const char *		mpszPacUrl);
  int
	web_set_proxy_bypass(
		const char *		mpszBypass);
  int
	web_set_secure_proxy(
		const char *		mpszProxyHost);
  int
	web_set_sockets_option(
		const char *		mpszOptionID,
		const char *		mpszOptionValue
	);
  int
	web_set_option(
		const char *		mpszOptionID,
		const char *		mpszOptionValue,
		...								 
	);
  int
	web_set_timeout(
		const char *		mpszWhat,
		const char *		mpszTimeout);
  int
	web_set_user(
		const char *		mpszUserName,
		const char *		mpszPwd,
		const char *		mpszHost);

  int
	web_sjis_to_euc_param(
		const char *		mpszParamName,
										 
		const char *		mpszParamValSjis);
										 

  int
	web_submit_data(
		const char *		mpszStepName,
		...);							 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
  int
	spdy_submit_data(
		const char *		mpszStepName,
		...);							 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 

  int
	web_submit_form(
		const char *		mpszStepName,
		...);							 
										 
										 
										 
										 
										 
										 
										 
										 
										  
										 
										 
										 
										 
										 
										  
										 
										 
										 
										 
										 
										 
										 
										  
										 
										 
										 
										 
										 
										  
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
  int
	web_url(
		const char *		mpszUrlName,
		...);							 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 

  int
	spdy_url(
		const char *		mpszUrlName,
		...);							 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 

  int 
	web_set_proxy_bypass_local(
		const char * mpszNoLocal
		);

  int 
	web_cache_cleanup(void);

  int
	web_create_html_query(
		const char* mpszStartQuery,
		...);							 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 

  int 
	web_create_radio_button_param(
		const char *NameFiled,
		const char *NameAndVal,
		const char *ParamName
		);

  int
	web_convert_from_formatted(
		const char * mpszArg1,
		...);							 
										 
										 
										 
										 
										 
										
  int
	web_convert_to_formatted(
		const char * mpszArg1,
		...);							 
										 
										 
										 
										 
										 

  int
	web_reg_save_param_ex(
		const char * mpszParamName,
		...);							 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 

  int
	web_reg_save_param_xpath(
		const char * mpszParamName,
		...);							
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 

  int
	web_reg_save_param_json(
		const char * mpszParamName,
		...);							
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 

  int
	web_reg_save_param_regexp(
		 const char * mpszParamName,
		 ...);							
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 
										 

  int
	web_reg_save_param_attrib(
		const char * mpszParamName,
		...);
										 
										 
										 
										 
										 
										 
										 		
										 
										 
										 
										 
										 
										 
										 
										 

  int
	web_js_run(
		const char * mpszCode,
		...);							
										 
										 
										 
										 
										 
										 
										 
										 
										 

  int
	web_js_reset(void);

  int
	web_convert_date_param(
		const char * 		mpszParamName,
		...);










# 789 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/as_web.h"


# 802 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/as_web.h"



























# 840 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/as_web.h"

 
 
 


  int
	FormSubmit(
		const char *		mpszFormName,
		...);
  int
	InitWebVuser(void);
  int
	SetUser(
		const char *		mpszUserName,
		const char *		mpszPwd,
		const char *		mpszHost);
  int
	TerminateWebVuser(void);
  int
	URL(
		const char *		mpszUrlName);
























# 908 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/as_web.h"


  int
	web_rest(
		const char *		mpszReqestName,
		...);							 
										 
										 
										 
										 

  int
web_stream_open(
	const char *		mpszArg1,
	...
);
  int
	web_stream_wait(
		const char *		mpszArg1,
		...
	);

  int
	web_stream_close(
		const char *		mpszArg1,
		...
	);

  int
web_stream_play(
	const char *		mpszArg1,
	...
	);

  int
web_stream_pause(
	const char *		mpszArg1,
	...
	);

  int
web_stream_seek(
	const char *		mpszArg1,
	...
	);

  int
web_stream_get_param_int(
	const char*			mpszStreamID,
	const int			miStateType
	);

  double
web_stream_get_param_double(
	const char*			mpszStreamID,
	const int			miStateType
	);

  int
web_stream_get_param_string(
	const char*			mpszStreamID,
	const int			miStateType,
	const char*			mpszParameterName
	);

  int
web_stream_set_param_int(
	const char*			mpszStreamID,
	const int			miStateType,
	const int			miStateValue
	);

  int
web_stream_set_param_double(
	const char*			mpszStreamID,
	const int			miStateType,
	const double		mdfStateValue
	);

  int
web_stream_set_custom_mpd(
	const char*			mpszStreamID,
	const char*			aMpdBuf
	);

 
 
 






# 9 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/web_api.h" 2

















 







 















  int
	web_reg_add_cookie(
		const char *		mpszCookie,
		...);							 
										 

  int
	web_report_data_point(
		const char *		mpszEventType,
		const char *		mpszEventName,
		const char *		mpszDataPointName,
		const char *		mpszLAST);	 
										 
										 
										 

  int
	web_text_link(
		const char *		mpszStepName,
		...);

  int
	web_element(
		const char *		mpszStepName,
		...);

  int
	web_image_link(
		const char *		mpszStepName,
		...);

  int
	web_static_image(
		const char *		mpszStepName,
		...);

  int
	web_image_submit(
		const char *		mpszStepName,
		...);

  int
	web_button(
		const char *		mpszStepName,
		...);

  int
	web_edit_field(
		const char *		mpszStepName,
		...);

  int
	web_radio_group(
		const char *		mpszStepName,
		...);

  int
	web_check_box(
		const char *		mpszStepName,
		...);

  int
	web_list(
		const char *		mpszStepName,
		...);

  int
	web_text_area(
		const char *		mpszStepName,
		...);

  int
	web_map_area(
		const char *		mpszStepName,
		...);

  int
	web_eval_java_script(
		const char *		mpszStepName,
		...);

  int
	web_reg_dialog(
		const char *		mpszArg1,
		...);

  int
	web_reg_cross_step_download(
		const char *		mpszArg1,
		...);

  int
	web_browser(
		const char *		mpszStepName,
		...);

  int
	web_control(
		const char *		mpszStepName,
		...);

  int
	web_set_rts_key(
		const char *		mpszArg1,
		...);

  int
	web_save_param_length(
		const char * 		mpszParamName,
		...);

  int
	web_save_timestamp_param(
		const char * 		mpszParamName,
		...);

  int
	web_load_cache(
		const char *		mpszStepName,
		...);							 
										 

  int
	web_dump_cache(
		const char *		mpszStepName,
		...);							 
										 
										 

  int
	web_reg_find_in_log(
		const char *		mpszArg1,
		...);							 
										 
										 

  int
	web_get_sockets_info(
		const char *		mpszArg1,
		...);							 
										 
										 
										 
										 

  int
	web_add_cookie_ex(
		const char *		mpszArg1,
		...);							 
										 
										 
										 

  int
	web_hook_java_script(
		const char *		mpszArg1,
		...);							 
										 
										 
										 

 
 
 
 
 
 
 
 
 
 
 
 
  int
	web_reg_async_attributes(
		const char *		mpszArg,
		...
	);

 
 
 
 
 
 
  int
	web_sync(
		 const char *		mpszArg1,
		 ...
	);

 
 
 
 
  int
	web_stop_async(
		const char *		mpszArg1,
		...
	);

 
 
 
 
 

 
 
 

typedef enum WEB_ASYNC_CB_RC_ENUM_T
{
	WEB_ASYNC_CB_RC_OK,				 

	WEB_ASYNC_CB_RC_ABORT_ASYNC_NOT_ERROR,
	WEB_ASYNC_CB_RC_ABORT_ASYNC_ERROR,
										 
										 
										 
										 
	WEB_ASYNC_CB_RC_ENUM_COUNT
} WEB_ASYNC_CB_RC_ENUM;

 
 
 

typedef enum WEB_CONVERS_CB_CALL_REASON_ENUM_T
{
	WEB_CONVERS_CB_CALL_REASON_BUFFER_RECEIVED,
	WEB_CONVERS_CB_CALL_REASON_END_OF_TASK,

	WEB_CONVERS_CB_CALL_REASON_ENUM_COUNT
} WEB_CONVERS_CB_CALL_REASON_ENUM;

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

typedef
int														 
	(*RequestCB_t)();

typedef
int														 
	(*ResponseBodyBufferCB_t)(
		  const char *		aLastBufferStr,
		  int				aLastBufferLen,
		  const char *		aAccumulatedStr,
		  int				aAccumulatedLen,
		  int				aHttpStatusCode);

typedef
int														 
	(*ResponseCB_t)(
		  const char *		aResponseHeadersStr,
		  int				aResponseHeadersLen,
		  const char *		aResponseBodyStr,
		  int				aResponseBodyLen,
		  int				aHttpStatusCode);

typedef
int														 
	(*ResponseHeadersCB_t)(
		  int				aHttpStatusCode,
		  const char *		aAccumulatedHeadersStr,
		  int				aAccumulatedHeadersLen);



 
 
 

typedef enum WEB_CONVERS_UTIL_RC_ENUM_T
{
	WEB_CONVERS_UTIL_RC_OK,
	WEB_CONVERS_UTIL_RC_CONVERS_NOT_FOUND,
	WEB_CONVERS_UTIL_RC_TASK_NOT_FOUND,
	WEB_CONVERS_UTIL_RC_INFO_NOT_FOUND,
	WEB_CONVERS_UTIL_RC_INFO_UNAVIALABLE,
	WEB_CONVERS_UTIL_RC_INVALID_ARGUMENT,

	WEB_CONVERS_UTIL_RC_ENUM_COUNT
} WEB_CONVERS_UTIL_RC_ENUM;

 
 
 

  int					 
	web_util_set_request_url(
		  const char *		aUrlStr);

  int					 
	web_util_set_request_body(
		  const char *		aRequestBodyStr);

  int					 
	web_util_set_formatted_request_body(
		  const char *		aRequestBodyStr);


 
 
 
 
 

 
 
 
 
 

 
 
 
 
 
 
 
 

 
 
  int
web_websocket_connect(
		 const char *	mpszArg1,
		 ...
		 );


 
 
 
 
 																						
  int
web_websocket_send(
	   const char *		mpszArg1,
		...
	   );

 
 
 
 
 
 
  int
web_websocket_close(
		const char *	mpszArg1,
		...
		);

 
typedef
void														
(*OnOpen_t)(
			  const char* connectionID,  
			  const char * responseHeader,  
			  int length  
);

typedef
void														
(*OnMessage_t)(
	  const char* connectionID,  
	  int isbinary,  
	  const char * data,  
	  int length  
	);

typedef
void														
(*OnError_t)(
	  const char* connectionID,  
	  const char * message,  
	  int length  
	);

typedef
void														
(*OnClose_t)(
	  const char* connectionID,  
	  int isClosedByClient,  
	  int code,  
	  const char* reason,  
	  int length  
	 );
 
 
 
 
 





# 7 "globals.h" 2

# 1 "C:\\Program Files (x86)\\HPE\\LoadRunner\\include/lrw_custom_body.h" 1
 





# 8 "globals.h" 2

# 1 "WebSocketBuffer.h" 1



 

char WebSocketReceive0[] = "{\"operation\":\"ping\",\"server-interval-sec\":60,\"message\":\"\"}";
long WebSocketReceiveLen0   = sizeof(WebSocketReceive0) - 1;	 

 

char WebSocketReceive1[] = "{\"operation\":\"ping\",\"server-interval-sec\":60,\"message\":\"\"}";
long WebSocketReceiveLen1   = sizeof(WebSocketReceive1) - 1;	 

 

char WebSocketReceive2[] = "{\"operation\":\"ping\",\"server-interval-sec\":60,\"message\":\"\"}";
long WebSocketReceiveLen2   = sizeof(WebSocketReceive2) - 1;	 

 

char WebSocketReceive3[] = "{\"operation\":\"ping\",\"server-interval-sec\":60,\"message\":\"\"}";
long WebSocketReceiveLen3   = sizeof(WebSocketReceive3) - 1;	 

 

char WebSocketReceive4[] = "{\"operation\":\"ping\",\"server-interval-sec\":60,\"message\":\"\"}";
long WebSocketReceiveLen4   = sizeof(WebSocketReceive4) - 1;	 

 

char WebSocketReceive5[] = "{\"operation\":\"ping\",\"server-interval-sec\":60,\"message\":\"\"}";
long WebSocketReceiveLen5   = sizeof(WebSocketReceive5) - 1;	 


# 9 "globals.h" 2

# 1 "AsyncCallbacks.c" 1
 
 
 
int Poll_0_RequestCB()
{
	 

	 
	 

	 
	 

	return WEB_ASYNC_CB_RC_OK;
}

int Poll_0_ResponseCB(
	const char *	aResponseHeadersStr,
	int				aResponseHeadersLen,
	const char *	aResponseBodyStr,
	int				aResponseBodyLen,
	int				aHttpStatusCode)
{
	 

	 
	 

	return WEB_ASYNC_CB_RC_OK;
}

int Poll_1_RequestCB()
{
	 

	 
	 

	 
	 

	return WEB_ASYNC_CB_RC_OK;
}

int Poll_1_ResponseCB(
	const char *	aResponseHeadersStr,
	int				aResponseHeadersLen,
	const char *	aResponseBodyStr,
	int				aResponseBodyLen,
	int				aHttpStatusCode)
{
	 

	 
	 

	return WEB_ASYNC_CB_RC_OK;
}

int Poll_2_RequestCB()
{
	 

	 
	 

	 
	 

	return WEB_ASYNC_CB_RC_OK;
}

int Poll_2_ResponseCB(
	const char *	aResponseHeadersStr,
	int				aResponseHeadersLen,
	const char *	aResponseBodyStr,
	int				aResponseBodyLen,
	int				aHttpStatusCode)
{
	 

	 
	 

	return WEB_ASYNC_CB_RC_OK;
}

int Poll_3_RequestCB()
{
	 

	 
	 

	 
	 

	return WEB_ASYNC_CB_RC_OK;
}

int Poll_3_ResponseCB(
	const char *	aResponseHeadersStr,
	int				aResponseHeadersLen,
	const char *	aResponseBodyStr,
	int				aResponseBodyLen,
	int				aHttpStatusCode)
{
	 

	 
	 

	return WEB_ASYNC_CB_RC_OK;
}

# 10 "globals.h" 2



 
 



# 3 "f:\\erknm\\erknm\\\\combined_ERKNM.c" 2

# 1 "vuser_init.c" 1
 







vuser_init()
{

	web_set_user("supervisor", lr_unmask("62175d1588f5d195a05ee422"), "private.proverki.local:80");

	web_add_auto_header("DNT", "1");

	web_add_header("Upgrade-Insecure-Requests", "1");

	web_url("private.proverki.local_2", 
		"URL={privateURL}", 
		"Resource=0", 
		"RecContentType=text/html", 
		"Referer=", 
		"Snapshot=t225.inf", 
		"Mode=HTML", 
		"EXTRARES", 
		"Url=https://yandex.ru/clck/click/dtype=elduse/path=tech.yaelements.dayuse/vars=-dayuse=829,-bro=chrome,-productname=translatechrome_chr,-ver=8-22-3,-ui=%7B09DD5623-D941-75FB-FF65-BEE4E3B516BA%7D,-brandID=yandex,-clid1=2231768/slots=0,0,0/*", "Referer=", "ENDITEM", 
		"Url=/private/static/js/2.6caa3188.chunk.js", "ENDITEM", 
		"Url=/private/static/js/main.b3e3c4c0.chunk.js", "Referer=", "ENDITEM", 
		"Url=/private/static/media/loader.76756433.gif", "Referer={privateURL}/private/auth", "ENDITEM", 
		"Url=/private/static/media/FiraSans-Regular.34239e5e.woff2", "Referer={privateURL}/private/static/css/main.881e09d5.chunk.css", "ENDITEM", 
		"Url=/private/static/media/FiraSans-Light.4e01567d.woff2", "Referer={privateURL}/private/static/css/main.881e09d5.chunk.css", "ENDITEM", 
		"LAST");

	web_set_sockets_option("INITIAL_AUTH", "BASIC");

	web_add_header("Origin", "{privateURL}");

	web_reg_save_param_regexp(
		"ParamName=SESSION_TOKEN",
		"RegExp=SESSION_TOKEN=(.*?);",
		"SEARCH_FILTERS",
		"Scope=Cookies",
		"IgnoreRedirections=No",
		"LAST");

	web_custom_request("auth_2", 
		"URL={privateURL}/public/auth/authenticator/api/internalauth/auth?loaderKey=default", 
		"Method=POST", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/auth", 
		"Snapshot=t226.inf", 
		"Mode=HTML", 
		"EncType=", 
		"LAST");
	
	 

	web_url("extendedprofile_2", 
		"URL={privateURL}/public/api/access-manager/api/users/current/extendedprofile", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/auth", 
		"Snapshot=t228.inf", 
		"Mode=HTML", 
		"LAST");
	
	web_url("organizations_10", 
		"URL={privateURL}/erknm-catalogs/api/general-info/organizations", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/auth", 
		"Snapshot=t293.inf", 
		"Mode=HTML", 
		"LAST");

	return 0;
}
# 4 "f:\\erknm\\erknm\\\\combined_ERKNM.c" 2

# 1 "addKNM.c" 1
addKNM()
{
	 
	web_url("roles_3", 
		"URL={privateURL}/private/api/admin/news/roles", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/lk/info", 
		"Snapshot=t290.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("published_8", 
		"URL={privateURL}/private/api/news/published?type=ANNOUNCEMENT&order=published,desc;", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/lk/info", 
		"Snapshot=t291.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("status-info-read_3", 
		"URL={privateURL}/private/api/signature/user/status-info-read", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/lk/info", 
		"Snapshot=t292.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("organizations_11", 
		"URL={privateURL}/erknm-catalogs/api/general-info/organizations", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/lk/info", 
		"Snapshot=t294.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("check-notification_3", 
		"URL={privateURL}/knm-service/api/knm-plan/check-notification", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/lk/info", 
		"Snapshot=t295.inf", 
		"Mode=HTML", 
		"EXTRARES", 
		"Url=/private/static/media/add.aa964dd5.svg", "Referer={privateURL}/private/static/css/main.881e09d5.chunk.css", "ENDITEM", 
		"Url=/private/static/media/delete.6395cd7b.svg", "Referer={privateURL}/private/static/css/main.881e09d5.chunk.css", "ENDITEM", 
		"Url=/private/static/media/info-italic.27ab16a9.svg", "Referer={privateURL}/private/static/css/main.881e09d5.chunk.css", "ENDITEM", 
		"Url=/private/static/media/settings.4811642b.svg", "Referer={privateURL}/private/static/css/main.881e09d5.chunk.css", "ENDITEM", 
		"LAST");

	 
	web_custom_request("settings_4", 
		"URL={privateURL}/private/api/settings", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knms", 
		"Snapshot=t296.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("published_9", 
		"URL={privateURL}/private/api/news/published?type=ANNOUNCEMENT&order=published,desc;", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knms", 
		"Snapshot=t297.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("schedule_4", 
		"URL={privateURL}/private/api/settings/schedule", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knms", 
		"Snapshot=t298.inf", 
		"Mode=HTML", 
		"LAST");

	web_add_header("Origin", "{privateURL}");

	web_custom_request("find-indexes_4", 
		"URL={privateURL}/private/api/knm/find-indexes?page=0&size=50&order=erpId%2Casc", 
		"Method=POST", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knms", 
		"Snapshot=t299.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"Body={\"version\":\"ERP\"}", 
		"LAST");
	
	 

	web_url("checklist-answer-types_2", 
		"URL={privateURL}/private/api/catalogs/checklist-answer-types", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t300.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("knm-address-types_2", 
		"URL={privateURL}/private/api/catalogs/knm-address-types", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t301.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("knm-document-types_2", 
		"URL={privateURL}/private/api/catalogs/knm-document-types", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t302.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("knm-delegate-types_2", 
		"URL={privateURL}/private/api/catalogs/knm-delegate-types", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t303.inf", 
		"Mode=HTML", 
		"LAST");

	 
	 
	web_reg_save_param_json(
		"ParamName=kind",
		"QueryString=$[0]",
		"SEARCH_FILTERS",
		"Scope=Body",
		"LAST");
	
	web_url("knm-execution-types_2", 
		"URL={privateURL}/private/api/catalogs/knm-execution-types", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t304.inf", 
		"Mode=HTML", 
		"LAST");
	
	 

	web_url("knm-notice-methods_2", 
		"URL={privateURL}/private/api/catalogs/knm-notice-methods", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t305.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("knm-inspectors_2", 
		"URL={privateURL}/private/api/knm-inspectors?knoId={knoId}", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t306.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("knm-object-types_2", 
		"URL={privateURL}/private/api/catalogs/knm-object-types", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Mode=HTML", 
		"LAST");

	web_url("knm-link-types_2", 
		"URL={privateURL}/private/api/catalogs/knm-link-types", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t308.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("knm-result-info-types_2", 
		"URL={privateURL}/private/api/catalogs/knm-result-info-types", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t309.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("knm-inspector-types_2", 
		"URL={privateURL}/private/api/catalogs/knm-inspector-types", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t310.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("knm-subject-types_2", 
		"URL={privateURL}/private/api/catalogs/knm-subject-types", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t311.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("knm-types_2", 
		"URL={privateURL}/private/api/catalogs/knm-types?enabled_248=false", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t312.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_url("knm-violation-types_2", 
		"URL={privateURL}/private/api/catalogs/knm-violation-types", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t313.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("test-purchase-methods_2", 
		"URL={privateURL}/private/api/catalogs/test-purchase-methods", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t314.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("risk-categories_2", 
		"URL={privateURL}/private/api/catalogs/risk-categories", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t315.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("violation-lawsuit-types_2", 
		"URL={privateURL}/private/api/catalogs/violation-lawsuit-types", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t316.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("published_10", 
		"URL={privateURL}/private/api/news/published?type=ANNOUNCEMENT&order=published,desc;", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t317.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("organizations_12", 
		"URL={privateURL}/erknm-catalogs/api/general-info/organizations?withDistrict=true", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t318.inf", 
		"Mode=HTML", 
		"EXTRARES", 
		"Url=/private/static/media/back.70f06ddf.svg", "Referer={privateURL}/private/static/css/main.881e09d5.chunk.css", "ENDITEM", 
		"LAST");

	web_custom_request("knm-plan-reason-change-types_2", 
		"URL={privateURL}/private/api/catalogs/erknm/knm-plan-reason-change-types", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t319.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("frequently-used_2", 
		"URL={privateURL}/private/api/catalogs/legal-basis/frequently-used?count=5", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t320.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("1_3", 
		"URL={privateURL}/private/api/catalogs/knm-reject-reason-types/1", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t321.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("1_4", 
		"URL={privateURL}/private/api/catalogs/knm-reason-types/1", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t322.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("getFunctionsKnoId", 
		"URL={privateURL}/erknm-catalogs/api/general-info/functions/{knoId}", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t323.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("0_2", 
		"URL={privateURL}/private/api/catalogs/knm-supervision-types/by-knm-type-and-subject-types/1/0", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t324.inf", 
		"Mode=HTML", 
		"EXTRARES", 
		"Url=/private/static/media/chevron-down.f78d5fc1.svg", "Referer={privateURL}/private/static/css/main.881e09d5.chunk.css", "ENDITEM", 
		"Url=/private/static/media/right-double-arrow.044e469b.svg", "Referer={privateURL}/private/static/css/main.881e09d5.chunk.css", "ENDITEM", 
		"LAST");

	web_url("levels_2", 
		"URL={privateURL}/private/api/catalogs/legal-basis/levels", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t325.inf", 
		"Mode=HTML", 
		"EXTRARES", 
		"Url=/private/static/media/right-arrow.3276ccdb.svg", "Referer={privateURL}/private/static/css/main.881e09d5.chunk.css", "ENDITEM", 
		"LAST");

	web_url("types_2", 
		"URL={privateURL}/private/api/catalogs/legal-basis/types", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t326.inf", 
		"Mode=HTML", 
		"LAST");

	 

	 

	web_reg_save_param_json(
		"ParamName=OGRN",
		"QueryString=$.ogrn",
		"SEARCH_FILTERS",
		"Scope=Body",
		"LAST");
	
	web_reg_save_param_json(
		"ParamName=OGRN",
		"QueryString=$.ogrn",
		"SEARCH_FILTERS",
		"Scope=Body",
		"LAST");
	
	 
	web_reg_save_param_json(
		"ParamName=orgName",
		"QueryString=$.orgName",
		"SEARCH_FILTERS",
		"Scope=Body",
		"LAST");
	
	web_url("getDataByINN", 
		"URL={privateURL}/private/api/fns/lookup/inn/{INN}", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t327.inf", 
		"Mode=HTML", 
		"EXTRARES", 
		"Url=/private/static/media/remove.7e6ce6a4.svg", "Referer={privateURL}/private/static/css/main.881e09d5.chunk.css", "ENDITEM", 
		"LAST");

	web_url("requirement-templates_2", 
		"URL={privateURL}/private/api/requirement-templates?needQuestions=true&size=2000", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t328.inf", 
		"Mode=HTML", 
		"LAST");

	 
	 
	web_url("getRequirementTemplatesByID", 
		"URL={privateURL}/private/api/requirement-templates/{requirementTemplates}", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t329.inf", 
		"Mode=HTML", 
		"LAST");

	web_add_auto_header("Origin", "{privateURL}");
	
	web_reg_save_param_json(
		"ParamName=idKNM",
		"QueryString=$.id",
		"SEARCH_FILTERS",
		"Scope=Body",
		"LAST");

	web_custom_request("createKNM", 
		"URL={privateURL}/knm-service/api/knm", 
		"Method=POST", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t330.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"BodyBinary={\"id\":null,\"erpId\":null,\"planId\":null,\"planGuid\":null,\"guid\":null,\"status\":null,\"year\":null,\"month\":2,\"creationDate\":null,\"publicationDate\":null,\"type\":{\"id\":1,\"name\":\"\\xD0\\x92\\xD0\\xBD\\xD0\\xB5\\xD0\\xBF\\xD0\\xBB\\xD0\\xB0\\xD0\\xBD\\xD0\\xBE\\xD0\\xB2\\xD0\\xB0\\xD1\\x8F \\xD0\\xBF\\xD1\\x80\\xD0\\xBE\\xD0\\xB2\\xD0\\xB5\\xD1\\x80\\xD0\\xBA\\xD0\\xB0\",\"code\":\"VP\",\"enabled\":true,\"weight\":1}," 
		"\"kind\":{kind}" 
		"\"federalLaw\":{\"id\":0,\"name\":\"294 \\xD0\\xA4\\xD0\\x97\",\"code\":\"294\"},\"title\":null,\"testPurchaseMethod\":null,\"testPurchaseDescription\":null,\"supervisionType\":{\"id\":216,\"idBk\":216,\"guid\":\"20191118-1816-4483-4742-000000383432\",\"name\":\"\\xD0\\x92\\xD1\\x8B\\xD0\\xB1\\xD0\\xBE\\xD1\\x80\\xD0\\xBE\\xD1\\x87\\xD0\\xBD\\xD1\\x8B\\xD0\\xB9 "
		"\\xD0\\xBA\\xD0\\xBE\\xD0\\xBD\\xD1\\x82\\xD1\\x80\\xD0\\xBE\\xD0\\xBB\\xD1\\x8C \\xD0\\xBA\\xD0\\xB0\\xD1\\x87\\xD0\\xB5\\xD1\\x81\\xD1\\x82\\xD0\\xB2\\xD0\\xB0 \\xD0\\xB1\\xD0\\xB8\\xD0\\xBE\\xD0\\xBC\\xD0\\xB5\\xD0\\xB4\\xD0\\xB8\\xD1\\x86\\xD0\\xB8\\xD0\\xBD\\xD1\\x81\\xD0\\xBA\\xD0\\xB8\\xD1\\x85 \\xD0\\xBA\\xD0\\xBB\\xD0\\xB5\\xD1\\x82\\xD0\\xBE\\xD1\\x87\\xD0\\xBD\\xD1\\x8B\\xD1\\x85 \\xD0\\xBF\\xD1\\x80\\xD0\\xBE\\xD0\\xB4\\xD1\\x83\\xD0\\xBA\\xD1\\x82\\xD0\\xBE\\xD0\\xB2.\",\"federalLaw\""
		":{\"id\":0,\"name\":\"294 \\xD0\\xA4\\xD0\\x97\",\"code\":\"294\"},\"digitCode\":\"1.176\",\"code\":\"SPV_216\",\"enabled\":true},\"startDate\":\"2022-02-24\",\"stopDate\":\"2022-02-25\",\"startDateIsMonth\":null,\"approve\":{\"inspectionTarget\":\"\\xD1\\x86\\xD0\\xB5\\xD0\\xBB\\xD1\\x8C\",\"startDate\":null,\"startDateIsMonth\":null,\"stopDate\":null,\"durationDays\":1,\"durationHours\":null,\"extDurationDays\":null,\"extDurationHours\":null,\"decisionPlace\":null,\"decisionDate\":null,\""
		"signerFullName\":null,\"signerPosition\":null,\"approved\":false,\"impossibleConductionReason\":null,\"documents\":[{\"id\":null,\"type\":{\"id\":1,\"code\":\"ORDER\"},\"atr\":\"1\",\"date\":\"2022-02-22\",\"main\":null,\"dateCreate\":null}],\"dateCreate\":null,\"streetGuid\":null,\"houseGuid\":null,\"roomGuid\":null,\"steadGuid\":null},\"reasons\":[{\"type\":{\"id\":107,\"name\":\"\\xD0\\x9F\\xD0\\xBE\\xD1\\x81\\xD1\\x82\\xD1\\x83\\xD0\\xBF\\xD0\\xBB\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD0\\xB5 "
		"\\xD0\\xB2 \\xD0\\xBE\\xD1\\x80\\xD0\\xB3\\xD0\\xB0\\xD0\\xBD \\xD0\\xB3\\xD0\\xBE\\xD1\\x81\\xD1\\x83\\xD0\\xB4\\xD0\\xB0\\xD1\\x80\\xD1\\x81\\xD1\\x82\\xD0\\xB2\\xD0\\xB5\\xD0\\xBD\\xD0\\xBD\\xD0\\xBE\\xD0\\xB3\\xD0\\xBE \\xD0\\xBA\\xD0\\xBE\\xD0\\xBD\\xD1\\x82\\xD1\\x80\\xD0\\xBE\\xD0\\xBB\\xD1\\x8F (\\xD0\\xBD\\xD0\\xB0\\xD0\\xB4\\xD0\\xB7\\xD0\\xBE\\xD1\\x80\\xD0\\xB0), "
		"\\xD0\\xBC\\xD1\\x83\\xD0\\xBD\\xD0\\xB8\\xD1\\x86\\xD0\\xB8\\xD0\\xBF\\xD0\\xB0\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD0\\xBE\\xD0\\xB3\\xD0\\xBE \\xD0\\xBA\\xD0\\xBE\\xD0\\xBD\\xD1\\x82\\xD1\\x80\\xD0\\xBE\\xD0\\xBB\\xD1\\x8F \\xD0\\xB7\\xD0\\xB0\\xD1\\x8F\\xD0\\xB2\\xD0\\xBB\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F \\xD0\\xBE\\xD1\\x82 \\xD0\\xB3\\xD1\\x80\\xD0\\xB0\\xD0\\xB6\\xD0\\xB4\\xD0\\xB0\\xD0\\xBD\\xD0\\xB8\\xD0\\xBD\\xD0\\xB0, "
		"\\xD0\\xBE\\xD1\\x80\\xD0\\xB3\\xD0\\xB0\\xD0\\xBD\\xD0\\xB8\\xD0\\xB7\\xD0\\xB0\\xD1\\x86\\xD0\\xB8\\xD0\\xB8 \\xD0\\xBE \\xD0\\xBF\\xD1\\x80\\xD0\\xB5\\xD0\\xB4\\xD0\\xBE\\xD1\\x81\\xD1\\x82\\xD0\\xB0\\xD0\\xB2\\xD0\\xBB\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD0\\xB8 \\xD0\\xBF\\xD1\\x80\\xD0\\xB0\\xD0\\xB2\\xD0\\xBE\\xD0\\xB2\\xD0\\xBE\\xD0\\xB3\\xD0\\xBE \\xD1\\x81\\xD1\\x82\\xD0\\xB0\\xD1\\x82\\xD1\\x83\\xD1\\x81\\xD0\\xB0, "
		"\\xD1\\x81\\xD0\\xBF\\xD0\\xB5\\xD1\\x86\\xD0\\xB8\\xD0\\xB0\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD0\\xBE\\xD0\\xB3\\xD0\\xBE \\xD1\\x80\\xD0\\xB0\\xD0\\xB7\\xD1\\x80\\xD0\\xB5\\xD1\\x88\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F (\\xD0\\xBB\\xD0\\xB8\\xD1\\x86\\xD0\\xB5\\xD0\\xBD\\xD0\\xB7\\xD0\\xB8\\xD0\\xB8) \\xD0\\xBD\\xD0\\xB0 \\xD0\\xBF\\xD1\\x80\\xD0\\xB0\\xD0\\xB2\\xD0\\xBE "
		"\\xD0\\xBE\\xD1\\x81\\xD1\\x83\\xD1\\x89\\xD0\\xB5\\xD1\\x81\\xD1\\x82\\xD0\\xB2\\xD0\\xBB\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F \\xD0\\xBE\\xD1\\x82\\xD0\\xB4\\xD0\\xB5\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD1\\x8B\\xD1\\x85 \\xD0\\xB2\\xD0\\xB8\\xD0\\xB4\\xD0\\xBE\\xD0\\xB2 \\xD0\\xB4\\xD0\\xB5\\xD1\\x8F\\xD1\\x82\\xD0\\xB5\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD0\\xBE\\xD1\\x81\\xD1\\x82\\xD0\\xB8 \\xD0\\xB8\\xD0\\xBB\\xD0\\xB8 "
		"\\xD1\\x80\\xD0\\xB0\\xD0\\xB7\\xD1\\x80\\xD0\\xB5\\xD1\\x88\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F (\\xD1\\x81\\xD0\\xBE\\xD0\\xB3\\xD0\\xBB\\xD0\\xB0\\xD1\\x81\\xD0\\xBE\\xD0\\xB2\\xD0\\xB0\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F) \\xD0\\xBD\\xD0\\xB0 \\xD0\\xBE\\xD1\\x81\\xD1\\x83\\xD1\\x89\\xD0\\xB5\\xD1\\x81\\xD1\\x82\\xD0\\xB2\\xD0\\xBB\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD0\\xB5 \\xD0\\xB8\\xD0\\xBD\\xD1\\x8B\\xD1\\x85 "
		"\\xD1\\x8E\\xD1\\x80\\xD0\\xB8\\xD0\\xB4\\xD0\\xB8\\xD1\\x87\\xD0\\xB5\\xD1\\x81\\xD0\\xBA\\xD0\\xB8 \\xD0\\xB7\\xD0\\xBD\\xD0\\xB0\\xD1\\x87\\xD0\\xB8\\xD0\\xBC\\xD1\\x8B\\xD1\\x85 \\xD0\\xB4\\xD0\\xB5\\xD0\\xB9\\xD1\\x81\\xD1\\x82\\xD0\\xB2\\xD0\\xB8\\xD0\\xB9, \\xD0\\xB5\\xD1\\x81\\xD0\\xBB\\xD0\\xB8 \\xD0\\xBF\\xD1\\x80\\xD0\\xBE\\xD0\\xB2\\xD0\\xB5\\xD0\\xB4\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD0\\xB5 "
		"\\xD1\\x81\\xD0\\xBE\\xD0\\xBE\\xD1\\x82\\xD0\\xB2\\xD0\\xB5\\xD1\\x82\\xD1\\x81\\xD1\\x82\\xD0\\xB2\\xD1\\x83\\xD1\\x8E\\xD1\\x89\\xD0\\xB5\\xD0\\xB9 \\xD0\\xB2\\xD0\\xBD\\xD0\\xB5\\xD0\\xBF\\xD0\\xBB\\xD0\\xB0\\xD0\\xBD\\xD0\\xBE\\xD0\\xB2\\xD0\\xBE\\xD0\\xB9 \\xD0\\xBF\\xD1\\x80\\xD0\\xBE\\xD0\\xB2\\xD0\\xB5\\xD1\\x80\\xD0\\xBA\\xD0\\xB8 \\xD0\\xB3\\xD1\\x80\\xD0\\xB0\\xD0\\xB6\\xD0\\xB4\\xD0\\xB0\\xD0\\xBD\\xD0\\xB8\\xD0\\xBD\\xD0\\xB0, "
		"\\xD0\\xBE\\xD1\\x80\\xD0\\xB3\\xD0\\xB0\\xD0\\xBD\\xD0\\xB8\\xD0\\xB7\\xD0\\xB0\\xD1\\x86\\xD0\\xB8\\xD0\\xB8 \\xD0\\xBF\\xD1\\x80\\xD0\\xB5\\xD0\\xB4\\xD1\\x83\\xD1\\x81\\xD0\\xBC\\xD0\\xBE\\xD1\\x82\\xD1\\x80\\xD0\\xB5\\xD0\\xBD\\xD0\\xBE \\xD0\\xBF\\xD1\\x80\\xD0\\xB0\\xD0\\xB2\\xD0\\xB8\\xD0\\xBB\\xD0\\xB0\\xD0\\xBC\\xD0\\xB8 \\xD0\\xBF\\xD1\\x80\\xD0\\xB5\\xD0\\xB4\\xD0\\xBE\\xD1\\x81\\xD1\\x82\\xD0\\xB0\\xD0\\xB2\\xD0\\xBB\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F "
		"\\xD0\\xBF\\xD1\\x80\\xD0\\xB0\\xD0\\xB2\\xD0\\xBE\\xD0\\xB2\\xD0\\xBE\\xD0\\xB3\\xD0\\xBE \\xD1\\x81\\xD1\\x82\\xD0\\xB0\\xD1\\x82\\xD1\\x83\\xD1\\x81\\xD0\\xB0, \\xD1\\x81\\xD0\\xBF\\xD0\\xB5\\xD1\\x86\\xD0\\xB8\\xD0\\xB0\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD0\\xBE\\xD0\\xB3\\xD0\\xBE \\xD1\\x80\\xD0\\xB0\\xD0\\xB7\\xD1\\x80\\xD0\\xB5\\xD1\\x88\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F (\\xD0\\xBB\\xD0\\xB8\\xD1\\x86\\xD0\\xB5\\xD0\\xBD\\xD0\\xB7\\xD0\\xB8\\xD0\\xB8), "
		"\\xD0\\xB2\\xD1\\x8B\\xD0\\xB4\\xD0\\xB0\\xD1\\x87\\xD0\\xB8 \\xD1\\x80\\xD0\\xB0\\xD0\\xB7\\xD1\\x80\\xD0\\xB5\\xD1\\x88\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F (\\xD1\\x81\\xD0\\xBE\\xD0\\xB3\\xD0\\xBB\\xD0\\xB0\\xD1\\x81\\xD0\\xBE\\xD0\\xB2\\xD0\\xB0\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F).\",\"code\":\"RSN_VP_CVII\",\"digitCode\":\"1.2.7\",\"hasText\":false,\"indicatorRiskRequired\":false,\"approveRequired\":false,\"dateRequired\":false,\"isDisabled\":false},\"date\":null,\"approveRequired\":false}],\""
		"legalBases\":[{\"documentName\":\"1\"}],\"events\":[{\"listId\":\"5832f7f8-e508-4577-9355-309c9c9949ed\",\"name\":\"\\xD0\\xBF\\xD0\\xB5\\xD1\\x80\\xD0\\xB5\\xD1\\x87\\xD0\\xB5\\xD0\\xBD\\xD1\\x8C\",\"startDate\":null,\"stopDate\":null}],\"signStatus\":null,\"knoOrganization\":{\"organization\":{\"id\":\"{knoId}\",\"fullName\":\"\\xD0\\xA4\\xD0\\xB5\\xD0\\xB4\\xD0\\xB5\\xD1\\x80\\xD0\\xB0\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD0\\xB0\\xD1\\x8F "
		"\\xD1\\x81\\xD0\\xBB\\xD1\\x83\\xD0\\xB6\\xD0\\xB1\\xD0\\xB0 \\xD0\\xBF\\xD0\\xBE \\xD0\\xBD\\xD0\\xB0\\xD0\\xB4\\xD0\\xB7\\xD0\\xBE\\xD1\\x80\\xD1\\x83 \\xD0\\xB2 \\xD1\\x81\\xD1\\x84\\xD0\\xB5\\xD1\\x80\\xD0\\xB5 \\xD0\\xB7\\xD0\\xB4\\xD1\\x80\\xD0\\xB0\\xD0\\xB2\\xD0\\xBE\\xD0\\xBE\\xD1\\x85\\xD1\\x80\\xD0\\xB0\\xD0\\xBD\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F\"},\"collaboratingKnoName\":null,\"collaboratingOrganizations\":null,\"functions\":null},\"inspectors\":[{\"fullName\":\""
		"268014\\xD0\\xB0\\xD0\\xB2\\xD1\\x82\\xD0\\xBE \\xD0\\xA4\\xD0\\x98\\xD0\\x9E\",\"position\":\"268014\\xD0\\xB0\\xD0\\xB2\\xD1\\x82\\xD0\\xBE \\xD0\\x94\\xD0\\xBE\\xD0\\xBB\\xD0\\xB6\\xD0\\xBD\\xD0\\xBE\\xD1\\x81\\xD1\\x82\\xD1\\x8C\",\"type\":{\"id\":1,\"name\":\"\\xD0\\x9F\\xD1\\x80\\xD0\\xBE\\xD0\\xB2\\xD0\\xB5\\xD1\\x80\\xD1\\x8F\\xD1\\x8E\\xD1\\x89\\xD0\\xB8\\xD0\\xB9\",\"code\":\"TYPE_I\",\"enabled\":true},\"main\":true}],\"prosecutorOrganization\":{\"id\":\"2\",\"code\":null,\"name\":\""
		"\\xD0\\x93\\xD0\\xB5\\xD0\\xBD\\xD0\\xB5\\xD1\\x80\\xD0\\xB0\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD0\\xB0\\xD1\\x8F \\xD0\\xBF\\xD1\\x80\\xD0\\xBE\\xD0\\xBA\\xD1\\x83\\xD1\\x80\\xD0\\xB0\\xD1\\x82\\xD1\\x83\\xD1\\x80\\xD0\\xB0 \\xD0\\xA0\\xD0\\xBE\\xD1\\x81\\xD1\\x81\\xD0\\xB8\\xD0\\xB9\\xD1\\x81\\xD0\\xBA\\xD0\\xBE\\xD0\\xB9 \\xD0\\xA4\\xD0\\xB5\\xD0\\xB4\\xD0\\xB5\\xD1\\x80\\xD0\\xB0\\xD1\\x86\\xD0\\xB8\\xD0\\xB8\",\"address\":null,\"contacts\":null,\"federalDistrictId\":null,\"regionId\":null,\""
		"parentId\":null,\"enabled\":null},\"rejectReasons\":null,\"organization\":{\"inn\":\"{INN}\",\"ogrn\":\"{OGRN}\",\"organizationName\":\"\\xD0\\x9E\\xD0\\x91\\xD0\\xA9\\xD0\\x95\\xD0\\xA1\\xD0\\xA2\\xD0\\x92\\xD0\\x9E \\xD0\\xA1 \\xD0\\x9E\\xD0\\x93\\xD0\\xA0\\xD0\\x90\\xD0\\x9D\\xD0\\x98\\xD0\\xA7\\xD0\\x95\\xD0\\x9D\\xD0\\x9D\\xD0\\x9E\\xD0\\x99 "
		"\\xD0\\x9E\\xD0\\xA2\\xD0\\x92\\xD0\\x95\\xD0\\xA2\\xD0\\xA1\\xD0\\xA2\\xD0\\x92\\xD0\\x95\\xD0\\x9D\\xD0\\x9D\\xD0\\x9E\\xD0\\xA1\\xD0\\xA2\\xD0\\xAC\\xD0\\xAE \\\"\\xD0\\x94\\xD0\\x9E\\xD0\\x9C \\xD0\\xA1\\xD0\\x95\\xD0\\xA0\\xD0\\x92\\xD0\\x98\\xD0\\xA1\\\"\",\"type\":{\"id\":0,\"name\":\"\\xD0\\xAE\\xD0\\x9B/\\xD0\\x98\\xD0\\x9F\",\"code\":\"UL_IP\",\"federalLaw\":null,\"enabled\":true,\"weight\":0},\"registrationDate\":\"2016-08-09\",\"licenseReasonStartDate\":null,\"licenseReasonKnmEndDate\""
		":null,\"autocomplete\":true,\"mspCode\":null},\"riskCategory\":null,\"objects\":null,\"noticeMethod\":null,\"noticeDate\":null,\"documents\":null,\"links\":[],\"district\":{\"id\":\"1000000000000001\",\"name\":\"\\xD0\\xA0\\xD0\\x9E\\xD0\\xA1\\xD0\\xA1\\xD0\\x98\\xD0\\xAF - \\xD1\\x81\\xD0\\xBE\\xD1\\x81\\xD1\\x82\\xD0\\xB0\\xD0\\xB2 \\xD1\\x84\\xD0\\xB5\\xD0\\xB4\\xD0\\xB5\\xD1\\x80\\xD0\\xB0\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD1\\x8B\\xD1\\x85 "
		"\\xD0\\xBE\\xD0\\xBA\\xD1\\x80\\xD1\\x83\\xD0\\xB3\\xD0\\xBE\\xD0\\xB2\",\"center\":null,\"okatoTer\":null,\"okatoKod1\":null,\"okatoRazdel\":null,\"federalRegionCode\":null,\"federalDistrict\":null},\"requirements\":[{\"name\":\"10798\\xD0\\xB0\\xD0\\xB2\\xD1\\x82\\xD0\\xBE \\xD0\\x9D\\xD0\\xB0\\xD0\\xB8\\xD0\\xBC\\xD0\\xB5\\xD0\\xBD\\xD0\\xBE\\xD0\\xB2\\xD0\\xB0\\xD0\\xBD\\xD0\\xB8\\xD0\\xB5\",\"template\":{\"id\":{requirementTemplates},\"name\":\"10798\\xD0\\xB0\\xD0\\xB2\\xD1\\x82\\xD0\\xBE "
		"\\xD0\\x9D\\xD0\\xB0\\xD0\\xB8\\xD0\\xBC\\xD0\\xB5\\xD0\\xBD\\xD0\\xBE\\xD0\\xB2\\xD0\\xB0\\xD0\\xBD\\xD0\\xB8\\xD0\\xB5\",\"byDefault\":false,\"knoOrganizationId\":\"{knoId}\",\"supervisionType\":216,\"requirements\":[{\"guid\":null,\"id\":60904,\"name\":\"10798\\xD0\\xB0\\xD0\\xB2\\xD1\\x82\\xD0\\xBE \\xD0\\x9D\\xD0\\xB0\\xD0\\xB8\\xD0\\xBC\\xD0\\xB5\\xD0\\xBD\\xD0\\xBE\\xD0\\xB2\\xD0\\xB0\\xD0\\xBD\\xD0\\xB8\\xD0\\xB5 \\xD0\\x9D\\xD0\\x9F\\xD0\\x90\",\"props\":\""
		"10798\\xD0\\xB0\\xD0\\xB2\\xD1\\x82\\xD0\\xBE \\xD0\\xA4\\xD0\\xBE\\xD1\\x80\\xD0\\xBC\\xD1\\x83\\xD0\\xBB\\xD0\\xB8\\xD1\\x80\\xD0\\xBE\\xD0\\xB2\\xD0\\xBA\\xD0\\xB0\",\"number\":\"107981\",\"date\":\"2022-02-17\",\"paragraph\":null,\"part\":null,\"article\":null,\"index\":0}],\"deleted\":false},\"documents\":[{\"guid\":null,\"id\":60904,\"name\":\"10798\\xD0\\xB0\\xD0\\xB2\\xD1\\x82\\xD0\\xBE "
		"\\xD0\\x9D\\xD0\\xB0\\xD0\\xB8\\xD0\\xBC\\xD0\\xB5\\xD0\\xBD\\xD0\\xBE\\xD0\\xB2\\xD0\\xB0\\xD0\\xBD\\xD0\\xB8\\xD0\\xB5 \\xD0\\x9D\\xD0\\x9F\\xD0\\x90\",\"props\":\"10798\\xD0\\xB0\\xD0\\xB2\\xD1\\x82\\xD0\\xBE \\xD0\\xA4\\xD0\\xBE\\xD1\\x80\\xD0\\xBC\\xD1\\x83\\xD0\\xBB\\xD0\\xB8\\xD1\\x80\\xD0\\xBE\\xD0\\xB2\\xD0\\xBA\\xD0\\xB0\",\"number\":\"107981\",\"date\":\"2022-02-17\",\"paragraph\":null,\"part\":null,\"article\":null,\"index\":0}],\"knoOrganization\":{\"id\":\"{knoId}\",\"fullName\""
		":\"\\xD0\\xA4\\xD0\\xB5\\xD0\\xB4\\xD0\\xB5\\xD1\\x80\\xD0\\xB0\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD0\\xB0\\xD1\\x8F \\xD1\\x81\\xD0\\xBB\\xD1\\x83\\xD0\\xB6\\xD0\\xB1\\xD0\\xB0 \\xD0\\xBF\\xD0\\xBE \\xD0\\xBD\\xD0\\xB0\\xD0\\xB4\\xD0\\xB7\\xD0\\xBE\\xD1\\x80\\xD1\\x83 \\xD0\\xB2 \\xD1\\x81\\xD1\\x84\\xD0\\xB5\\xD1\\x80\\xD0\\xB5 \\xD0\\xB7\\xD0\\xB4\\xD1\\x80\\xD0\\xB0\\xD0\\xB2\\xD0\\xBE\\xD0\\xBE\\xD1\\x85\\xD1\\x80\\xD0\\xB0\\xD0\\xBD\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F\",\"districtName\""
		":null,\"districtId\":null,\"byDefault\":true,\"isEnable\":true},\"supervisionType\":{\"id\":216,\"idBk\":216,\"guid\":\"20191118-1816-4483-4742-000000383432\",\"name\":\"\\xD0\\x92\\xD1\\x8B\\xD0\\xB1\\xD0\\xBE\\xD1\\x80\\xD0\\xBE\\xD1\\x87\\xD0\\xBD\\xD1\\x8B\\xD0\\xB9 \\xD0\\xBA\\xD0\\xBE\\xD0\\xBD\\xD1\\x82\\xD1\\x80\\xD0\\xBE\\xD0\\xBB\\xD1\\x8C \\xD0\\xBA\\xD0\\xB0\\xD1\\x87\\xD0\\xB5\\xD1\\x81\\xD1\\x82\\xD0\\xB2\\xD0\\xB0 "
		"\\xD0\\xB1\\xD0\\xB8\\xD0\\xBE\\xD0\\xBC\\xD0\\xB5\\xD0\\xB4\\xD0\\xB8\\xD1\\x86\\xD0\\xB8\\xD0\\xBD\\xD1\\x81\\xD0\\xBA\\xD0\\xB8\\xD1\\x85 \\xD0\\xBA\\xD0\\xBB\\xD0\\xB5\\xD1\\x82\\xD0\\xBE\\xD1\\x87\\xD0\\xBD\\xD1\\x8B\\xD1\\x85 \\xD0\\xBF\\xD1\\x80\\xD0\\xBE\\xD0\\xB4\\xD1\\x83\\xD0\\xBA\\xD1\\x82\\xD0\\xBE\\xD0\\xB2.\",\"federalLaw\":{\"id\":0,\"name\":\"294 \\xD0\\xA4\\xD0\\x97\",\"code\":\"294\"},\"digitCode\":\"1.176\",\"code\":\"SPV_216\",\"enabled\":true},\"guid\":null}],\"deleted\":null"
		",\"publishedStatus\":null,\"manualPublish\":null,\"published\":null,\"correlationToken\":null,\"createdBy\":null,\"updatedBy\":null,\"created\":null,\"updated\":null,\"note\":null,\"hash\":null,\"signed\":null,\"signatureInfo\":null,\"dateCreate\":null,\"classificationDateCreate\":null,\"publishDateCreate\":null,\"statusDateCreate\":null,\"knmErknm\":null,\"pmErknm\":null,\"version\":\"ERP\",\"clientTime\":\"2022-02-22T14:06:44.311Z\"}", 
		"LAST");
	
	 

	web_custom_request("find-previous", 
		"URL={privateURL}/private/api/knm/find-previous?size=10", 
		"Method=POST", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t331.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"Body={\"year\":2022,\"inn\":[\"{INN}\"],\"ogrn\":[\"{OGRN}\"]}", 
		"LAST");

	(web_remove_auto_header("Origin", "ImplicitGen=Yes", "LAST"));

	 
	web_url("openKNMlinksByID", 
		"URL={privateURL}/private/api/knm/{idKNM}/links", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t332.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("getKNMByID", 
		"URL={privateURL}/private/api/knm/{idKNM}", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/{idKNM}", 
		"Snapshot=t333.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("organizations_13", 
		"URL={privateURL}/erknm-catalogs/api/general-info/organizations?withDistrict=true", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/new", 
		"Snapshot=t334.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("history", 
		"URL={privateURL}/private/api/knm/{idKNM}/history", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/{idKNM}", 
		"Snapshot=t336.inf", 
		"Mode=HTML", 
		"LAST");

	web_add_auto_header("Origin", 
		"{privateURL}");

	 
	web_custom_request("getKNMByID_2", 
		"URL={privateURL}/erknm-editors/api/knm/{idKNM}", 
		"Method=PUT", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer={privateURL}/private/knm/{idKNM}", 
		"Snapshot=t337.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("logout_3", 
		"URL={privateURL}/public/auth/authenticator/api/internalauth/logout", 
		"Method=DELETE", 
		"Resource=0", 
		"Referer={privateURL}/private/knm/{idKNM}", 
		"Snapshot=t338.inf", 
		"Mode=HTML", 
		"LAST");

	return 0;
}
# 5 "f:\\erknm\\erknm\\\\combined_ERKNM.c" 2

# 1 "addKNM_ERKNM.c" 1
addKNM_ERKNM()
{

	web_set_user("supervisor", 
		lr_unmask("62175d1588f5d195a05ee422"), 
		"private.proverki.local:80");

	web_add_cookie("_yasc=xT4nyDnPIHPxgMSYHT57YbjUBRlG9V/kRizPxvY1XvW2wHDH; DOMAIN=yandex.ru");

	web_add_cookie("ys=wprid.1643638350173521-13608692661345350810-vla1-3034-vla-l7-balancer-8080-BAL-4638#musicchrome.0-0-4711111; DOMAIN=yandex.ru");

	web_add_auto_header("DNT", 
		"1");

	web_add_header("Upgrade-Insecure-Requests", 
		"1");

	web_url("private.proverki.local_5", 
		"URL=http://private.proverki.local/", 
		"Resource=0", 
		"Referer=", 
		"Snapshot=t339.inf", 
		"Mode=HTML", 
		"EXTRARES", 
		"Url=https://yandex.ru/clck/click/dtype=elduse/path=tech.yaelements.dayuse/vars=-dayuse=832,-bro=chrome,-productname=weatherchrome,-ver=8-22-3,-ui=%7B09DD5623-D941-75FB-FF65-BEE4E3B516BA%7D,-brandID=yandex,-clid1=2231762/slots=0,0,0/*", "Referer=", "ENDITEM", 
		"Url=/private/static/js/2.6caa3188.chunk.js", "Referer=", "ENDITEM", 
		"Url=/private/static/js/main.b3e3c4c0.chunk.js", "Referer=", "ENDITEM", 
		"Url=/private/static/media/FiraSans-Regular.34239e5e.woff2", "Referer=http://private.proverki.local/private/static/css/main.881e09d5.chunk.css", "ENDITEM", 
		"Url=/private/static/media/FiraSans-Light.4e01567d.woff2", "Referer=http://private.proverki.local/private/static/css/main.881e09d5.chunk.css", "ENDITEM", 
		"Url=/private/static/media/loader.76756433.gif", "Referer=http://private.proverki.local/private/auth", "ENDITEM", 
		"Url=/private/faviconNew.ico", "Referer=http://private.proverki.local/private/auth", "ENDITEM", 
		"LAST");

	web_set_sockets_option("INITIAL_AUTH", "BASIC");

	web_add_header("Origin", 
		"http://private.proverki.local");

	lr_think_time(8);

	web_custom_request("auth_5", 
		"URL=http://private.proverki.local/public/auth/authenticator/api/internalauth/auth?loaderKey=default", 
		"Method=POST", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/auth", 
		"Snapshot=t340.inf", 
		"Mode=HTML", 
		"EncType=", 
		"LAST");

	web_url("extendedprofile_6", 
		"URL=http://private.proverki.local/public/api/access-manager/api/users/current/extendedprofile", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/auth", 
		"Snapshot=t341.inf", 
		"Mode=HTML", 
		"EXTRARES", 
		"Url=/private/api/public-portal-url", "Referer=http://private.proverki.local/private/auth", "ENDITEM", 
		"LAST");

	web_url("organizations_14", 
		"URL=http://private.proverki.local/erknm-catalogs/api/general-info/organizations", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/auth", 
		"Snapshot=t342.inf", 
		"Mode=HTML", 
		"LAST");

	lr_think_time(4);

	web_url("roles_4", 
		"URL=http://private.proverki.local/private/api/admin/news/roles", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/lk/info", 
		"Snapshot=t343.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("published_11", 
		"URL=http://private.proverki.local/private/api/news/published?type=ANNOUNCEMENT&order=published,desc;", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/lk/info", 
		"Snapshot=t344.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("status-info-read_4", 
		"URL=http://private.proverki.local/private/api/signature/user/status-info-read", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/lk/info", 
		"Snapshot=t345.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("organizations_15", 
		"URL=http://private.proverki.local/erknm-catalogs/api/general-info/organizations", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/lk/info", 
		"Snapshot=t346.inf", 
		"Mode=HTML", 
		"EXTRARES", 
		"Url=/private/static/media/close.4a519fb6.svg", "Referer=http://private.proverki.local/private/static/css/main.881e09d5.chunk.css", "ENDITEM", 
		"LAST");

	web_custom_request("check-notification_4", 
		"URL=http://private.proverki.local/knm-service/api/knm-plan/check-notification", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/lk/info", 
		"Snapshot=t347.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("checklist-answer-types_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/checklist-answer-types", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/lk/info", 
		"Snapshot=t348.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("knm-expert-types", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-expert-types", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/lk/info", 
		"Snapshot=t349.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("knm-document-types_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/knm-document-types", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/lk/info", 
		"Snapshot=t350.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("knm-document-types_4", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-document-types", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/lk/info", 
		"Snapshot=t351.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("knm-notice-methods_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/knm-notice-methods", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/lk/info", 
		"Snapshot=t352.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("knm-responsible-types", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-responsible-types", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/lk/info", 
		"Snapshot=t353.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("knm-types_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/knm-types?enabled_248=true", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/lk/info", 
		"Snapshot=t354.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("acquaintance-types", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/acquaintance-types", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/lk/info", 
		"Snapshot=t355.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("responsibility-type", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/responsibility-type", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/lk/info", 
		"Snapshot=t356.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("kind-result-decision", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/kind-result-decision", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/lk/info", 
		"Snapshot=t357.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("danger-class", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/danger-class", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/lk/info", 
		"Snapshot=t358.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("kno-organizations", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/kno-organizations", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/lk/info", 
		"Snapshot=t359.inf", 
		"Mode=HTML", 
		"EXTRARES", 
		"Url=/private/static/media/add.aa964dd5.svg", "Referer=http://private.proverki.local/private/static/css/main.881e09d5.chunk.css", "ENDITEM", 
		"Url=/private/static/media/info-italic.27ab16a9.svg", "Referer=http://private.proverki.local/private/static/css/main.881e09d5.chunk.css", "ENDITEM", 
		"Url=/private/static/media/delete.6395cd7b.svg", "Referer=http://private.proverki.local/private/static/css/main.881e09d5.chunk.css", "ENDITEM", 
		"Url=/private/static/media/settings.4811642b.svg", "Referer=http://private.proverki.local/private/static/css/main.881e09d5.chunk.css", "ENDITEM", 
		"LAST");

	web_custom_request("settings_5", 
		"URL=http://private.proverki.local/erknm-catalogs/api/settings", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knms", 
		"Snapshot=t360.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("schedule_5", 
		"URL=http://private.proverki.local/erknm-catalogs/api/settings/schedule", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knms", 
		"Snapshot=t361.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("published_12", 
		"URL=http://private.proverki.local/erknm-catalogs/api/news/published?type=ANNOUNCEMENT&order=published,desc;", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knms", 
		"Snapshot=t362.inf", 
		"Mode=HTML", 
		"LAST");

	web_add_header("Origin", 
		"http://private.proverki.local");

	web_custom_request("find-indexes_5", 
		"URL=http://private.proverki.local/erknm-index/api/knm/find-indexes?page=0&size=50&order=erpId%2Casc", 
		"Method=POST", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knms", 
		"Snapshot=t363.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"Body={\"version\":\"ERKNM\"}", 
		"LAST");

	web_url("published_13", 
		"URL=http://private.proverki.local/erknm-catalogs/api/news/published?type=ANNOUNCEMENT&order=published,desc;", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/new", 
		"Snapshot=t364.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("knm-reason-types", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-reason-types?isPm=false&isPlanned=false", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/new", 
		"Snapshot=t365.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_url("organizations_16", 
		"URL=http://private.proverki.local/erknm-catalogs/api/general-info/organizations?withDistrict=true", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/new", 
		"Snapshot=t366.inf", 
		"Mode=HTML", 
		"EXTRARES", 
		"Url=/private/static/media/back.70f06ddf.svg", "Referer=http://private.proverki.local/private/static/css/main.881e09d5.chunk.css", "ENDITEM", 
		"LAST");

	web_custom_request("knm-reject-reason-types", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-reject-reason-types?isPlaned=false", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/new", 
		"Snapshot=t367.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("knm-plan-reason-change-types_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-plan-reason-change-types", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/new", 
		"Snapshot=t368.inf", 
		"Mode=HTML", 
		"LAST");

	lr_think_time(4);

	web_custom_request("supervision-type", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/supervision-type?uuids=0ae947de-79cd-1640-8179-fb67ca760249", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/new", 
		"Snapshot=t369.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("check-list", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/check-list?uuidKno=0ae947de-79cd-1640-8179-fb67ca760249&uuidSupervision=0af4cd2e-78cb-109b-8178-e98123ff01b6", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/new", 
		"Snapshot=t370.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_url("get-kno-supervision-uuid", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/constraint/get-kno-supervision-uuid?knoVersionId=0ae947de-79cd-1640-8179-fb67ca760249&supervisionVersionId=0af4cd2e-78cb-109b-8178-e98123ff01b6", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/new", 
		"Snapshot=t371.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("requirement", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/requirement?uuidKno=0ae947de-79cd-1640-8179-fb67ca760249&uuidSupervision=0af4cd2e-78cb-109b-8178-e98123ff01b6", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/new", 
		"Snapshot=t372.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("positions", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/positions?uniqueUuid=992dfa3d-57e4-4550-aa46-3871bbc45cd3", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/new", 
		"Snapshot=t373.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("subject-type", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/subject-type?uniqueUuid=992dfa3d-57e4-4550-aa46-3871bbc45cd3", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/new", 
		"Snapshot=t374.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("knm-kind", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/knm-kind?uniqueUuid=992dfa3d-57e4-4550-aa46-3871bbc45cd3", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/new", 
		"Snapshot=t375.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("subject-sub-kind", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/subject-sub-kind?uniqueUuid=992dfa3d-57e4-4550-aa46-3871bbc45cd3", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/new", 
		"Snapshot=t376.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("participant-positions", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/participant-positions?uniqueUuid=992dfa3d-57e4-4550-aa46-3871bbc45cd3", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/new", 
		"Snapshot=t377.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("accepted-document", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/accepted-document?uniqueUuid=992dfa3d-57e4-4550-aa46-3871bbc45cd3", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/new", 
		"Snapshot=t378.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("risk-indicatory", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/risk-indicatory?uniqueUuid=992dfa3d-57e4-4550-aa46-3871bbc45cd3", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/new", 
		"Snapshot=t379.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("subject-kind", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/subject-kind?uniqueUuid=992dfa3d-57e4-4550-aa46-3871bbc45cd3", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/new", 
		"Snapshot=t380.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_url("5", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/knm-reject-reason-types/5", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/new", 
		"Snapshot=t381.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("5_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/knm-reason-types/5", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/new", 
		"Snapshot=t382.inf", 
		"Mode=HTML", 
		"EXTRARES", 
		"Url=/private/static/media/chevron-down.f78d5fc1.svg", "Referer=http://private.proverki.local/private/static/css/main.881e09d5.chunk.css", "ENDITEM", 
		"LAST");

	 

	 

	web_url("7743943819", 
		"URL=http://private.proverki.local/erknm-catalogs/api/fns/lookup/inn/7743943819", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/new", 
		"Snapshot=t383.inf", 
		"Mode=HTML", 
		"EXTRARES", 
		"Url=/private/static/media/remove.7e6ce6a4.svg", "Referer=http://private.proverki.local/private/static/css/main.881e09d5.chunk.css", "ENDITEM", 
		"LAST");

	web_custom_request("okved", 
		"URL=http://private.proverki.local/erknm-catalogs/api/registry/export/okved?inn=7743943819&ogrn=5147746249965", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/new", 
		"Snapshot=t384.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_add_header("Origin", 
		"http://private.proverki.local");

	lr_think_time(8);

	web_custom_request("knm_3", 
		"URL=http://private.proverki.local/erknm-knm/api/knm", 
		"Method=POST", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/new", 
		"Snapshot=t385.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"BodyBinary={\"id\":null,\"erpId\":null,\"guid\":null,\"status\":null,\"year\":null,\"month\":null,\"creationDate\":null,\"publicationDate\":null,\"kind\":null,\"federalLaw\":null,\"title\":null,\"testPurchaseMethod\":null,\"testPurchaseDescription\":null,\"supervisionType\":null,\"startDateIsMonth\":null,\"approve\":null,\"reasons\":null,\"legalBases\":null,\"events\":null,\"signStatus\":null,\"knoOrganization\":null,\"inspectors\":null,\"rejectReasons\":null,\"organization\":null,\"riskCategory\""
		":null,\"objects\":null,\"links\":[],\"district\":{\"id\":\"1000000000000001\",\"name\":\"\\xD0\\xA0\\xD0\\x9E\\xD0\\xA1\\xD0\\xA1\\xD0\\x98\\xD0\\xAF - \\xD1\\x81\\xD0\\xBE\\xD1\\x81\\xD1\\x82\\xD0\\xB0\\xD0\\xB2 \\xD1\\x84\\xD0\\xB5\\xD0\\xB4\\xD0\\xB5\\xD1\\x80\\xD0\\xB0\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD1\\x8B\\xD1\\x85 \\xD0\\xBE\\xD0\\xBA\\xD1\\x80\\xD1\\x83\\xD0\\xB3\\xD0\\xBE\\xD0\\xB2\",\"center\":null,\"okatoTer\":null,\"okatoKod1\":null,\"okatoRazdel\":null,\"federalRegionCode\":null,\""
		"federalDistrict\":null},\"requirements\":null,\"deleted\":null,\"publishedStatus\":null,\"manualPublish\":null,\"published\":null,\"correlationToken\":null,\"createdBy\":null,\"updatedBy\":null,\"created\":null,\"updated\":null,\"note\":null,\"hash\":null,\"signed\":null,\"signatureInfo\":null,\"dateCreate\":null,\"classificationDateCreate\":null,\"publishDateCreate\":null,\"statusDateCreate\":null,\"pmErknm\":null,\"planId\":null,\"planGuid\":null,\"type\":{\"id\":5,\"name\":\""
		"\\xD0\\x92\\xD0\\xBD\\xD0\\xB5\\xD0\\xBF\\xD0\\xBB\\xD0\\xB0\\xD0\\xBD\\xD0\\xBE\\xD0\\xB2\\xD0\\xBE\\xD0\\xB5 \\xD0\\x9A\\xD0\\x9D\\xD0\\x9C\",\"code\":\"VP\",\"enabled\":false,\"weight\":1,\"label\":\"\\xD0\\x92\\xD0\\xBD\\xD0\\xB5\\xD0\\xBF\\xD0\\xBB\\xD0\\xB0\\xD0\\xBD\\xD0\\xBE\\xD0\\xB2\\xD0\\xBE\\xD0\\xB5 \\xD0\\x9A\\xD0\\x9D\\xD0\\x9C\",\"value\":\"VP\"},\"startDate\":\"2022-02-25\",\"stopDate\":\"2022-02-27\",\"prosecutorOrganization\":{\"id\":\"2\",\"code\":null,\"name\":\""
		"\\xD0\\x93\\xD0\\xB5\\xD0\\xBD\\xD0\\xB5\\xD1\\x80\\xD0\\xB0\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD0\\xB0\\xD1\\x8F \\xD0\\xBF\\xD1\\x80\\xD0\\xBE\\xD0\\xBA\\xD1\\x83\\xD1\\x80\\xD0\\xB0\\xD1\\x82\\xD1\\x83\\xD1\\x80\\xD0\\xB0 \\xD0\\xA0\\xD0\\xBE\\xD1\\x81\\xD1\\x81\\xD0\\xB8\\xD0\\xB9\\xD1\\x81\\xD0\\xBA\\xD0\\xBE\\xD0\\xB9 \\xD0\\xA4\\xD0\\xB5\\xD0\\xB4\\xD0\\xB5\\xD1\\x80\\xD0\\xB0\\xD1\\x86\\xD0\\xB8\\xD0\\xB8\",\"address\":null,\"contacts\":null,\"federalDistrictId\":null,\"regionId\":null,\""
		"parentId\":null,\"enabled\":null},\"noticeMethod\":null,\"noticeDate\":null,\"documents\":null,\"knmErknm\":{\"accessToken\":null,\"knoOrganization\":{\"dictId\":\"af002594-a4f0-11eb-bcbc-0242ac130002\",\"dictVersionId\":\"0ae947de-79cd-1640-8179-fb67ca760249\"},\"decision\":{\"dateTimeDecision\":null,\"numberDecision\":null,\"placeDecision\":null,\"fioSigner\":null,\"titleSigner\":null},\"durationDays\":null,\"durationHours\":null,\"kindControl\":{\"dictId\":\""
		"1f27d942-a52e-11eb-bcbc-0242ac130002\",\"dictVersionId\":\"0af4cd2e-78cb-109b-8178-e98123ff01b6\"},\"kindKnm\":{\"dictId\":\"d2ec803a-a53e-11eb-bcbc-0242ac130002\",\"dictVersionId\":\"d2ec803a-a53e-11eb-bcbc-0242ac130003\"},\"reasonDocuments\":null,\"reasons\":[{\"reason\":{\"id\":null,\"type\":{\"id\":205,\"name\":\"(\\xD0\\xA4\\xD0\\x97 248) \\xD0\\x9D\\xD0\\xB0\\xD0\\xBB\\xD0\\xB8\\xD1\\x87\\xD0\\xB8\\xD0\\xB5 \\xD1\\x83 "
		"\\xD0\\xBA\\xD0\\xBE\\xD0\\xBD\\xD1\\x82\\xD1\\x80\\xD0\\xBE\\xD0\\xBB\\xD1\\x8C\\xD0\\xBD\\xD0\\xBE\\xD0\\xB3\\xD0\\xBE (\\xD0\\xBD\\xD0\\xB0\\xD0\\xB4\\xD0\\xB7\\xD0\\xBE\\xD1\\x80\\xD0\\xBD\\xD0\\xBE\\xD0\\xB3\\xD0\\xBE) \\xD0\\xBE\\xD1\\x80\\xD0\\xB3\\xD0\\xB0\\xD0\\xBD\\xD0\\xB0 \\xD1\\x81\\xD0\\xB2\\xD0\\xB5\\xD0\\xB4\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD0\\xB9 \\xD0\\xBE \\xD0\\xBF\\xD1\\x80\\xD0\\xB8\\xD1\\x87\\xD0\\xB8\\xD0\\xBD\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD0\\xB8 "
		"\\xD0\\xB2\\xD1\\x80\\xD0\\xB5\\xD0\\xB4\\xD0\\xB0 (\\xD1\\x83\\xD1\\x89\\xD0\\xB5\\xD1\\x80\\xD0\\xB1\\xD0\\xB0) \\xD0\\xB8\\xD0\\xBB\\xD0\\xB8 \\xD0\\xBE\\xD0\\xB1 \\xD1\\x83\\xD0\\xB3\\xD1\\x80\\xD0\\xBE\\xD0\\xB7\\xD0\\xB5 \\xD0\\xBF\\xD1\\x80\\xD0\\xB8\\xD1\\x87\\xD0\\xB8\\xD0\\xBD\\xD0\\xB5\\xD0\\xBD\\xD0\\xB8\\xD1\\x8F \\xD0\\xB2\\xD1\\x80\\xD0\\xB5\\xD0\\xB4\\xD0\\xB0 (\\xD1\\x83\\xD1\\x89\\xD0\\xB5\\xD1\\x80\\xD0\\xB1\\xD0\\xB0) "
		"\\xD0\\xBE\\xD1\\x85\\xD1\\x80\\xD0\\xB0\\xD0\\xBD\\xD1\\x8F\\xD0\\xB5\\xD0\\xBC\\xD1\\x8B\\xD0\\xBC \\xD0\\xB7\\xD0\\xB0\\xD0\\xBA\\xD0\\xBE\\xD0\\xBD\\xD0\\xBE\\xD0\\xBC \\xD1\\x86\\xD0\\xB5\\xD0\\xBD\\xD0\\xBD\\xD0\\xBE\\xD1\\x81\\xD1\\x82\\xD1\\x8F\\xD0\\xBC\",\"code\":\"ERKNM_5\",\"digitCode\":\"4.0.5\",\"hasText\":false,\"indicatorRiskRequired\":false,\"approveRequired\":false,\"dateRequired\":false,\"isDisabled\":false},\"text\":null,\"date\":null,\"main\":null,\"approveRequired\":null,\""
		"dateCreate\":null},\"riskIndikators\":null,\"numGuid\":null,\"dateCreate\":null}],\"dataContent\":null,\"prosecutorDocuments\":null,\"approve\":{\"approved\":null,\"approveRequired\":\"NON_REQUIRED\",\"approveNote\":null,\"dateDecision\":null,\"numberDecision\":null,\"fioSigner\":null,\"titleSigner\":null,\"noteAppeal\":null,\"rejectReasonType\":null,\"rejectReasonNote\":null,\"dateRejectReason\":null,\"prosecutorRegStatus\":null,\"note\":null,\"appeal\":null},\"organizations\":[{\"inn\":\""
		"7743943819\",\"ogrn\":\"5147746249965\",\"okveds\":null,\"addressFns\":null,\"organizationName\":\"\\xD0\\x9E\\xD0\\x91\\xD0\\xA9\\xD0\\x95\\xD0\\xA1\\xD0\\xA2\\xD0\\x92\\xD0\\x9E \\xD0\\xA1 \\xD0\\x9E\\xD0\\x93\\xD0\\xA0\\xD0\\x90\\xD0\\x9D\\xD0\\x98\\xD0\\xA7\\xD0\\x95\\xD0\\x9D\\xD0\\x9D\\xD0\\x9E\\xD0\\x99 \\xD0\\x9E\\xD0\\xA2\\xD0\\x92\\xD0\\x95\\xD0\\xA2\\xD0\\xA1\\xD0\\xA2\\xD0\\x92\\xD0\\x95\\xD0\\x9D\\xD0\\x9D\\xD0\\x9E\\xD0\\xA1\\xD0\\xA2\\xD0\\xAC\\xD0\\xAE \\\""
		"\\xD0\\xA2\\xD0\\xA0\\xD0\\x90\\xD0\\x9D\\xD0\\xA1\\xD0\\x9F\\xD0\\x9E\\xD0\\xA0\\xD0\\xA2\\xD0\\x9D\\xD0\\x9E-\\xD0\\xAD\\xD0\\x9A\\xD0\\xA1\\xD0\\x9F\\xD0\\x95\\xD0\\x94\\xD0\\x98\\xD0\\xA6\\xD0\\x98\\xD0\\x9E\\xD0\\x9D\\xD0\\x9D\\xD0\\x90\\xD0\\xAF \\xD0\\x9A\\xD0\\x9E\\xD0\\x9C\\xD0\\x9F\\xD0\\x90\\xD0\\x9D\\xD0\\x98\\xD0\\xAF \\\"\\xD0\\x9C\\xD0\\x95\\xD0\\x93\\xD0\\x90\\xD0\\x9F\\xD0\\x9E\\xD0\\x9B\\xD0\\x98\\xD0\\xA1\\\"\",\"mspCode\":null,\"checkSubjectResult\":null,\"dateCreate\":null,\""
		"act\":null,\"resultDecisions\":null,\"isAutocomplete\":true,\"isFiz\":null,\"guid\":null,\"isDocumentOrganization\":false}],\"objects\":[{\"address\":\"123\",\"objectType\":{\"dictId\":\"641d3956-a5b1-11eb-bcbc-0242ac130002\",\"dictVersionId\":\"0af4cd2e-78cb-109b-8178-ea2e8d4a0411\"},\"objectKind\":{\"dictId\":\"641d3e60-a5b1-11eb-bcbc-0242ac130002\",\"dictVersionId\":\"0ae95284-79cd-16d7-8179-e68a987d006a\"},\"objectSubKind\":{\"dictId\":\"641d3e60-a5b1-11eb-bcbc-0242ac130002\",\"dictVersionId\""
		":\"0ae95284-79cd-16d7-8179-e68a987d006a\"},\"riskCategory\":null,\"dangerClass\":{\"dictId\":\"aae78350-bdfd-12eb-8529-0242ac130003\",\"dictVersionId\":\"992a805a-f461-11eb-9a03-0242ac130003\"},\"guid\":null,\"streetGuid\":null,\"houseGuid\":null,\"roomGuid\":null,\"steadGuid\":null,\"addressFns\":null,\"autocomplete\":false,\"dateCreate\":null}],\"inspectors\":null,\"experts\":null,\"isHasCollaboratingOrganization\":null,\"collaboratingOrganizations\":null,\"events\":null,\""
		"collaboratingOrganizationChangeDate\":null,\"requirements\":null,\"approveDocs\":null,\"isChecklistsUsed\":null,\"checklists\":null,\"places\":null,\"organizationDocuments\":null,\"serviceDocument\":null,\"isRemote\":null,\"noteRemote\":null,\"withVideo\":null,\"isSelection\":null,\"selection\":null,\"isPresence\":null,\"isPresenceDelegateFullNames\":null,\"returnSelection\":null,\"attachmentsWeb\":null,\"documentRequestDate\":null,\"documentResponseDate\":null,\"manuallyRequirements\":null,\""
		"manuallyCheckList\":null,\"appealStatus\":null,\"changePlanReason\":null,\"isAppealed\":null,\"oldKnmNumber\":null,\"oldPlanNumber\":null,\"webNotificationInfos\":null},\"version\":\"ERKNM\",\"clientTime\":\"2022-02-24T13:10:25.229Z\"}", 
		"LAST");

	web_custom_request("0ae947de-79cd-1640-8179-fb67ca760249", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/af002594-a4f0-11eb-bcbc-0242ac130002/0ae947de-79cd-1640-8179-fb67ca760249", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/new", 
		"Snapshot=t386.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("0af4cd2e-78cb-109b-8178-e98123ff01b6", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/1f27d942-a52e-11eb-bcbc-0242ac130002/0af4cd2e-78cb-109b-8178-e98123ff01b6", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/new", 
		"Snapshot=t387.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("0af4cd2e-78cb-109b-8178-ea2e8d4a0411", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/641d3956-a5b1-11eb-bcbc-0242ac130002/0af4cd2e-78cb-109b-8178-ea2e8d4a0411", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/new", 
		"Snapshot=t388.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("d2ec803a-a53e-11eb-bcbc-0242ac130003", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/d2ec803a-a53e-11eb-bcbc-0242ac130002/d2ec803a-a53e-11eb-bcbc-0242ac130003", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/new", 
		"Snapshot=t389.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("992a805a-f461-11eb-9a03-0242ac130003", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/aae78350-bdfd-12eb-8529-0242ac130003/992a805a-f461-11eb-9a03-0242ac130003", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/new", 
		"Snapshot=t390.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("0ae95284-79cd-16d7-8179-e68a987d006a", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/641d3e60-a5b1-11eb-bcbc-0242ac130002/0ae95284-79cd-16d7-8179-e68a987d006a", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/new", 
		"Snapshot=t391.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("links_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/knm/820703/links", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/new", 
		"Snapshot=t392.inf", 
		"Mode=HTML", 
		"EXTRARES", 
		"Url=/private/static/media/exclamation-sign.e3b4a272.svg", "Referer=http://private.proverki.local/private/static/css/main.881e09d5.chunk.css", "ENDITEM", 
		"LAST");

	web_url("organizations_17", 
		"URL=http://private.proverki.local/erknm-catalogs/api/general-info/organizations?withDistrict=true", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/new", 
		"Snapshot=t393.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("820703", 
		"URL=http://private.proverki.local/erknm-catalogs/api/knm/820703", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/820703", 
		"Snapshot=t394.inf", 
		"Mode=HTML", 
		"LAST");

	web_add_auto_header("Origin", 
		"http://private.proverki.local");

	web_custom_request("find-previous_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/knm/find-previous?size=10&isFederalLaw248=true", 
		"Method=POST", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/820703", 
		"Snapshot=t395.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"Body={\"year\":2022,\"inn\":[\"7743943819\"],\"ogrn\":[\"5147746249965\"]}", 
		"LAST");

	web_custom_request("820703_2", 
		"URL=http://private.proverki.local/erknm-editors/api/knm/820703", 
		"Method=PUT", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/820703", 
		"Snapshot=t396.inf", 
		"Mode=HTML", 
		"LAST");

	return 0;
}
# 6 "f:\\erknm\\erknm\\\\combined_ERKNM.c" 2

# 1 "editKNM_ERKNM.c" 1
editKNM_ERKNM()
{

	 

	web_set_sockets_option("SSL_VERSION", "2&3");

	web_set_user("supervisor", 
		lr_unmask("62175e9d940e4d38ea8e1015"), 
		"private.proverki.local:80");

	web_add_cookie("SESSION_TOKEN=; DOMAIN=private.proverki.local");

	web_add_auto_header("DNT", 
		"1");

	web_add_header("Upgrade-Insecure-Requests", 
		"1");

	web_url("private.proverki.local", 
		"URL=http://private.proverki.local/", 
		"Resource=0", 
		"Referer=", 
		"Snapshot=t397.inf", 
		"Mode=HTML", 
		"LAST");

	web_set_sockets_option("INITIAL_AUTH", "BASIC");

	 

	 

	web_add_header("Origin", 
		"http://private.proverki.local");

	lr_think_time(7);

	web_custom_request("auth", 
		"URL=http://private.proverki.local/public/auth/authenticator/api/internalauth/auth?loaderKey=default", 
		"Method=POST", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/auth", 
		"Snapshot=t398.inf", 
		"Mode=HTML", 
		"EncType=", 
		"LAST");

	web_url("extendedprofile", 
		"URL=http://private.proverki.local/public/api/access-manager/api/users/current/extendedprofile", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/auth", 
		"Snapshot=t399.inf", 
		"Mode=HTML", 
		"EXTRARES", 
		"Url=/erknm-catalogs/api/public-portal-url", "Referer=http://private.proverki.local/private/auth", "ENDITEM", 
		"LAST");

	web_url("organizations", 
		"URL=http://private.proverki.local/erknm-catalogs/api/general-info/organizations", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/auth", 
		"Snapshot=t400.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("roles", 
		"URL=http://private.proverki.local/erknm-catalogs/api/admin/news/roles", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/lk/info", 
		"Snapshot=t401.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("published", 
		"URL=http://private.proverki.local/erknm-catalogs/api/news/published?type=ANNOUNCEMENT&order=published,desc;", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/lk/info", 
		"Snapshot=t402.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("organizations_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/general-info/organizations", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/lk/info", 
		"Snapshot=t403.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("status-info-read", 
		"URL=http://private.proverki.local/erknm-catalogs/api/signature/user/status-info-read", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/lk/info", 
		"Snapshot=t404.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("check-notification", 
		"URL=http://private.proverki.local/erknm-knm/api/knm-plan/check-notification", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/lk/info", 
		"Snapshot=t405.inf", 
		"Mode=HTML", 
		"LAST");

	lr_think_time(4);

	web_custom_request("settings", 
		"URL=http://private.proverki.local/erknm-catalogs/api/settings", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knms", 
		"Snapshot=t406.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("published_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/news/published?type=ANNOUNCEMENT&order=published,desc;", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knms", 
		"Snapshot=t407.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("schedule", 
		"URL=http://private.proverki.local/erknm-catalogs/api/settings/schedule", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knms", 
		"Snapshot=t408.inf", 
		"Mode=HTML", 
		"LAST");

	web_add_header("Origin", 
		"http://private.proverki.local");

	web_custom_request("find-indexes", 
		"URL=http://private.proverki.local/erknm-index/api/knm/find-indexes?page=0&size=50&order=erpId%2Casc", 
		"Method=POST", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knms", 
		"Snapshot=t409.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"Body={\"version\":\"ERKNM\"}", 
		"LAST");

	web_add_header("Upgrade-Insecure-Requests", 
		"1");

	web_url("819254", 
		"URL=http://private.proverki.local/private/knm/819254", 
		"Resource=0", 
		"RecContentType=text/html", 
		"Referer=", 
		"Snapshot=t410.inf", 
		"Mode=HTML", 
		"EXTRARES", 
		"Url=/erknm-catalogs/api/public-portal-url", "ENDITEM", 
		"LAST");

	web_url("extendedprofile_2", 
		"URL=http://private.proverki.local/public/api/access-manager/api/users/current/extendedprofile", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t411.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("organizations_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/general-info/organizations", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t412.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("knm-expert-types", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-expert-types", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t413.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("checklist-answer-types", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/checklist-answer-types", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t414.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("knm-document-types", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-document-types", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t415.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("knm-document-types_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/knm-document-types", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t416.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("knm-notice-methods", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/knm-notice-methods", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t417.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("knm-responsible-types", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-responsible-types", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t418.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("knm-types", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/knm-types?enabled_248=true", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t419.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_url("responsibility-type", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/responsibility-type", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t420.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("acquaintance-types", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/acquaintance-types", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t421.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("kind-result-decision", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/kind-result-decision", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t422.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("organizations_4", 
		"URL=http://private.proverki.local/erknm-catalogs/api/general-info/organizations?withDistrict=true", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t423.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("knm-reason-types", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-reason-types?isPm=false&isPlanned=false", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t424.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_url("roles_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/admin/news/roles", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t425.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("danger-class", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/danger-class", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t426.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("819254_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/knm/819254", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t427.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("published_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/news/published?type=ANNOUNCEMENT&order=published,desc;", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t428.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("kno-organizations", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/kno-organizations", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t429.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("knm-reject-reason-types", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-reject-reason-types?isPlaned=false", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t430.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("knm-plan-reason-change-types", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-plan-reason-change-types", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t431.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("0ae95284-79cd-16d7-817a-0fce4d560592", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/af002594-a4f0-11eb-bcbc-0242ac130002/0ae95284-79cd-16d7-817a-0fce4d560592", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t432.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("0ae96452-7a6d-1eab-817a-75be2a8700d9", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/b6fc9844-a528-11eb-bcbc-0242ac130002/0ae96452-7a6d-1eab-817a-75be2a8700d9", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t433.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("0af4cd2e-78cb-109b-8178-e981258701db", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/1f27d942-a52e-11eb-bcbc-0242ac130002/0af4cd2e-78cb-109b-8178-e981258701db", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t434.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("d2ec803a-a53e-11eb-bcbc-0242ac130053", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/d2ec803a-a53e-11eb-bcbc-0242ac130002/d2ec803a-a53e-11eb-bcbc-0242ac130053", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t435.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("0af4cd2e-78cb-109b-8178-d5a7ba1b0018", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/f0f9a79a-a5b3-11eb-bcbc-0242ac130002/0af4cd2e-78cb-109b-8178-d5a7ba1b0018", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t436.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("ccbc95b6-2570-434d-bae0-918cf5be156a", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/a43f056e-b95c-11eb-8529-0242ac130003/ccbc95b6-2570-434d-bae0-918cf5be156a", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t437.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("7a322fc0-a08d-468a-b6e2-6e61b6c2d475", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/a43f056e-b95c-11eb-8529-0242ac130003/7a322fc0-a08d-468a-b6e2-6e61b6c2d475", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t438.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("links", 
		"URL=http://private.proverki.local/erknm-catalogs/api/knm/819254/links", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t439.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("a73bdd66-6426-46eb-a1e3-930ea7049b87", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/a43f056e-b95c-11eb-8529-0242ac130003/a73bdd66-6426-46eb-a1e3-930ea7049b87", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t440.inf", 
		"Mode=HTML", 
		"LAST");

	web_add_header("Origin", 
		"http://private.proverki.local");

	web_custom_request("819254_3", 
		"URL=http://private.proverki.local/erknm-editors/api/knm/819254", 
		"Method=PUT", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t441.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("5", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/knm-reason-types/5", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t442.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("5_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/knm-reject-reason-types/5", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t443.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("supervision-type", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/supervision-type?uuids=0ae95284-79cd-16d7-817a-0fce4d560592", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t444.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("check-list", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/check-list?uuidKno=0ae95284-79cd-16d7-817a-0fce4d560592&uuidSupervision=0af4cd2e-78cb-109b-8178-e981258701db", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t445.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_url("get-kno-supervision-uuid", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/constraint/get-kno-supervision-uuid?knoVersionId=0ae95284-79cd-16d7-817a-0fce4d560592&supervisionVersionId=0af4cd2e-78cb-109b-8178-e981258701db", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t446.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("requirement", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/requirement?uuidKno=0ae95284-79cd-16d7-817a-0fce4d560592&uuidSupervision=0af4cd2e-78cb-109b-8178-e981258701db", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t447.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("knm-kind", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/knm-kind?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t448.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("positions", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/positions?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t449.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("subject-type", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/subject-type?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t450.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("participant-positions", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/participant-positions?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t451.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_url("get-event-uuid", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/constraint/get-event-uuid?knoSupervisionId=c51b895a-6c36-499b-a038-6f18aa7c2032&knmKindId=d2ec803a-a53e-11eb-bcbc-0242ac130053", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t452.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("accepted-document", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/accepted-document?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t453.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("subject-sub-kind", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/subject-sub-kind?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t454.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("risk-indicatory", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/risk-indicatory?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t455.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("subject-kind", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/subject-kind?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t456.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("event-type", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/event-type?uniqueUuidEvent=c6bdabdf-f10d-4a96-ba21-c7976b73ac85", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t457.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("risk-category", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/risk-category?uniqueUuid=c6bdabdf-f10d-4a96-ba21-c7976b73ac85", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t458.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_add_auto_header("Origin", 
		"http://private.proverki.local");

	lr_think_time(7);

 
# 677 "editKNM_ERKNM.c"
	web_reg_async_attributes("ID=Poll_0", 
		"Pattern=Poll", 
		"URL=http://private.proverki.local/erknm-editors/api/knm/819254", 
		"PollIntervalMs=4000", 
		"RequestCB=Poll_0_RequestCB", 
		"ResponseCB=Poll_0_ResponseCB", 
		"LAST");

	web_custom_request("819254_4", 
		"URL=http://private.proverki.local/erknm-editors/api/knm/819254", 
		"Method=PUT", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t459.inf", 
		"Mode=HTML", 
		"LAST");

 


	 
# 709 "editKNM_ERKNM.c"

 


	 
# 724 "editKNM_ERKNM.c"

 


	web_stop_async("ID=Poll_0", 
		"LAST");

	lr_think_time(13);

 
# 745 "editKNM_ERKNM.c"
	web_reg_async_attributes("ID=Poll_1", 
		"Pattern=Poll", 
		"URL=http://private.proverki.local/erknm-editors/api/knm/819254", 
		"PollIntervalMs=4000", 
		"RequestCB=Poll_1_RequestCB", 
		"ResponseCB=Poll_1_ResponseCB", 
		"LAST");

	web_custom_request("819254_7", 
		"URL=http://private.proverki.local/erknm-editors/api/knm/819254", 
		"Method=PUT", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t462.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("find-previous", 
		"URL=http://private.proverki.local/erknm-catalogs/api/knm/find-previous?size=10&isFederalLaw248=true", 
		"Method=POST", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t463.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"Body={\"year\":2022,\"inn\":[\"7811689828\"]}", 
		"LAST");

 


	 
# 789 "editKNM_ERKNM.c"

 


	 
# 804 "editKNM_ERKNM.c"

 


	 
# 819 "editKNM_ERKNM.c"

	lr_think_time(12);

 


	 
# 836 "editKNM_ERKNM.c"

 


	web_stop_async("ID=Poll_1", 
		"LAST");

	 

	 

	(web_remove_auto_header("Origin", "ImplicitGen=Yes", "LAST"));

	web_url("published_4", 
		"URL=http://private.proverki.local/erknm-catalogs/api/news/published?type=ANNOUNCEMENT&order=published,desc;", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knms", 
		"Snapshot=t468.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("settings_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/settings", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knms", 
		"Snapshot=t469.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("schedule_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/settings/schedule", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knms", 
		"Snapshot=t470.inf", 
		"Mode=HTML", 
		"LAST");

	web_add_header("Origin", 
		"http://private.proverki.local");

	web_custom_request("find-indexes_2", 
		"URL=http://private.proverki.local/erknm-index/api/knm/find-indexes?page=0&size=50&order=erpId%2Casc", 
		"Method=POST", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knms", 
		"Snapshot=t471.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"Body={\"version\":\"ERKNM\"}", 
		"LAST");

	web_add_header("Upgrade-Insecure-Requests", 
		"1");

	lr_think_time(6);

	web_url("813655", 
		"URL=http://private.proverki.local/private/knm/813655", 
		"Resource=0", 
		"RecContentType=text/html", 
		"Referer=", 
		"Snapshot=t472.inf", 
		"Mode=HTML", 
		"EXTRARES", 
		"Url=/erknm-catalogs/api/public-portal-url", "ENDITEM", 
		"LAST");

	web_url("extendedprofile_3", 
		"URL=http://private.proverki.local/public/api/access-manager/api/users/current/extendedprofile", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t473.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("organizations_5", 
		"URL=http://private.proverki.local/erknm-catalogs/api/general-info/organizations", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t474.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("knm-expert-types_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-expert-types", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t475.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("checklist-answer-types_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/checklist-answer-types", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t476.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("knm-document-types_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-document-types", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t477.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("knm-responsible-types_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-responsible-types", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t478.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("knm-notice-methods_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/knm-notice-methods", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t479.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("knm-document-types_4", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/knm-document-types", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t480.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("knm-types_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/knm-types?enabled_248=true", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t481.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_url("responsibility-type_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/responsibility-type", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t482.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("kind-result-decision_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/kind-result-decision", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t483.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("acquaintance-types_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/acquaintance-types", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t484.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("organizations_6", 
		"URL=http://private.proverki.local/erknm-catalogs/api/general-info/organizations?withDistrict=true", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t485.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("813655_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/knm/813655", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t486.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("danger-class_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/danger-class", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t487.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("knm-reason-types_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-reason-types?isPm=false&isPlanned=false", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t488.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("kno-organizations_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/kno-organizations", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t489.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("roles_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/admin/news/roles", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t490.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("published_5", 
		"URL=http://private.proverki.local/erknm-catalogs/api/news/published?type=ANNOUNCEMENT&order=published,desc;", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t491.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("knm-reject-reason-types_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-reject-reason-types?isPlaned=false", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t492.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("knm-plan-reason-change-types_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-plan-reason-change-types", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t493.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("links_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/knm/813655/links", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t494.inf", 
		"Mode=HTML", 
		"LAST");

	web_add_header("Origin", 
		"http://private.proverki.local");

	web_custom_request("813655_3", 
		"URL=http://private.proverki.local/erknm-editors/api/knm/813655", 
		"Method=PUT", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t495.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("okved", 
		"URL=http://private.proverki.local/erknm-catalogs/api/registry/export/okved?inn=7811689828&ogrn=1187847106699", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t496.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("0ae96452-7a6d-1eab-817a-75be2a8700d9_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/b6fc9844-a528-11eb-bcbc-0242ac130002/0ae96452-7a6d-1eab-817a-75be2a8700d9", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t497.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("0af4cd2e-78cb-109b-8178-e92043ff007e", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/af002594-a4f0-11eb-bcbc-0242ac130002/0af4cd2e-78cb-109b-8178-e92043ff007e", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t498.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("0af4cd2e-78cb-109b-8178-e9812c9e028d", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/1f27d942-a52e-11eb-bcbc-0242ac130002/0af4cd2e-78cb-109b-8178-e9812c9e028d", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t499.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("0ae96452-7a6d-1eab-817a-75d4d7b60150", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/003d7ce8-c474-11eb-8529-0242ac130003/0ae96452-7a6d-1eab-817a-75d4d7b60150", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t500.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("d2ec803a-a53e-11eb-bcbc-0242ac130063", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/d2ec803a-a53e-11eb-bcbc-0242ac130002/d2ec803a-a53e-11eb-bcbc-0242ac130063", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t501.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("0ae94760-7a6d-1f16-817a-75cbe2500111", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/003d7ce8-c474-11eb-8529-0242ac130003/0ae94760-7a6d-1f16-817a-75cbe2500111", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t502.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("0ae96452-7a6d-1eab-817a-75cdaa8b011f", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/003d7ce8-c474-11eb-8529-0242ac130003/0ae96452-7a6d-1eab-817a-75cdaa8b011f", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t503.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("0ae94760-7a6d-1f16-817a-75bd23e900c9", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/b6fc9844-a528-11eb-bcbc-0242ac130002/0ae94760-7a6d-1f16-817a-75bd23e900c9", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t504.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("0ae94760-7a6d-1f16-817a-75ca17810106", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/003d7ce8-c474-11eb-8529-0242ac130003/0ae94760-7a6d-1f16-817a-75ca17810106", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t505.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("0ae96452-7a6d-1eab-817a-75c9c4420102", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/003d7ce8-c474-11eb-8529-0242ac130003/0ae96452-7a6d-1eab-817a-75c9c4420102", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t506.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("okved_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/registry/export/okved?inn=7811689828&ogrn=1187847106699", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t507.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("0af4cd2e-78cb-109b-8178-ea2e8d46040d", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/641d3956-a5b1-11eb-bcbc-0242ac130002/0af4cd2e-78cb-109b-8178-ea2e8d46040d", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t508.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("0ae94760-7a6d-1f16-817a-71336165000c", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/641d3e60-a5b1-11eb-bcbc-0242ac130002/0ae94760-7a6d-1f16-817a-71336165000c", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t509.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("03ea99db-82c7-4ff4-8074-cdb722439e44", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/a43f056e-b95c-11eb-8529-0242ac130003/03ea99db-82c7-4ff4-8074-cdb722439e44", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t510.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("0af4cd2e-78cb-109b-8178-d5aaf14d002c", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/18d790d4-a5a9-11eb-bcbc-0242ac130002/0af4cd2e-78cb-109b-8178-d5aaf14d002c", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t511.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("aae78350-bdfd-12eb-8529-0242ac130013", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/aae78350-bdfd-12eb-8529-0242ac130003/aae78350-bdfd-12eb-8529-0242ac130013", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t512.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("0ae94760-7a6d-1f16-817a-75d525bb0145", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/003d7ce8-c474-11eb-8529-0242ac130003/0ae94760-7a6d-1f16-817a-75d525bb0145", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t513.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("5_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/knm-reason-types/5", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t514.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("0ae94760-7a6d-1f16-817a-75cbe2500111_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/003d7ce8-c474-11eb-8529-0242ac130003/0ae94760-7a6d-1f16-817a-75cbe2500111", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t515.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("5_4", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/knm-reject-reason-types/5", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t516.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("okved_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/registry/export/okved?inn=7811689828&ogrn=1187847106699", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t517.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("0ae94760-7a6d-1f16-817a-71336165000c_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/641d3e60-a5b1-11eb-bcbc-0242ac130002/0ae94760-7a6d-1f16-817a-71336165000c", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t518.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("okved_4", 
		"URL=http://private.proverki.local/erknm-catalogs/api/registry/export/okved?inn=7811689828&ogrn=1187847106699", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t519.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("okved_5", 
		"URL=http://private.proverki.local/erknm-catalogs/api/registry/export/okved?inn=7811689828&ogrn=1187847106699", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t520.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("supervision-type_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/supervision-type?uuids=0af4cd2e-78cb-109b-8178-e92043ff007e", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t521.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("check-list_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/check-list?uuidKno=0af4cd2e-78cb-109b-8178-e92043ff007e&uuidSupervision=0af4cd2e-78cb-109b-8178-e9812c9e028d", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t522.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_url("get-kno-supervision-uuid_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/constraint/get-kno-supervision-uuid?knoVersionId=0af4cd2e-78cb-109b-8178-e92043ff007e&supervisionVersionId=0af4cd2e-78cb-109b-8178-e9812c9e028d", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t523.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("requirement_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/requirement?uuidKno=0af4cd2e-78cb-109b-8178-e92043ff007e&uuidSupervision=0af4cd2e-78cb-109b-8178-e9812c9e028d", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t524.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("knm-kind_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/knm-kind?uniqueUuid=2ef9aa31-c480-48e4-86db-c717ce1596b0", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t525.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("positions_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/positions?uniqueUuid=2ef9aa31-c480-48e4-86db-c717ce1596b0", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t526.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("subject-type_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/subject-type?uniqueUuid=2ef9aa31-c480-48e4-86db-c717ce1596b0", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t527.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("participant-positions_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/participant-positions?uniqueUuid=2ef9aa31-c480-48e4-86db-c717ce1596b0", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t528.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_url("get-event-uuid_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/constraint/get-event-uuid?knoSupervisionId=2ef9aa31-c480-48e4-86db-c717ce1596b0&knmKindId=d2ec803a-a53e-11eb-bcbc-0242ac130063", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t529.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("accepted-document_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/accepted-document?uniqueUuid=2ef9aa31-c480-48e4-86db-c717ce1596b0", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t530.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("risk-indicatory_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/risk-indicatory?uniqueUuid=2ef9aa31-c480-48e4-86db-c717ce1596b0", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t531.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("subject-sub-kind_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/subject-sub-kind?uniqueUuid=2ef9aa31-c480-48e4-86db-c717ce1596b0", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t532.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("subject-kind_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/subject-kind?uniqueUuid=2ef9aa31-c480-48e4-86db-c717ce1596b0", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t533.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("risk-category_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/risk-category?uniqueUuid=1a7e898d-b323-42a9-bd25-05f6a7e01726", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t534.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("event-type_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/event-type?uniqueUuidEvent=1a7e898d-b323-42a9-bd25-05f6a7e01726", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t535.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_add_auto_header("Origin", 
		"http://private.proverki.local");

	lr_think_time(6);

 
# 1564 "editKNM_ERKNM.c"
	web_reg_async_attributes("ID=Poll_3", 
		"Pattern=Poll", 
		"URL=http://private.proverki.local/erknm-editors/api/knm/813655", 
		"PollIntervalMs=4000", 
		"RequestCB=Poll_3_RequestCB", 
		"ResponseCB=Poll_3_ResponseCB", 
		"LAST");

	web_custom_request("813655_4", 
		"URL=http://private.proverki.local/erknm-editors/api/knm/813655", 
		"Method=PUT", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/813655", 
		"Snapshot=t536.inf", 
		"Mode=HTML", 
		"LAST");

 


	 
# 1596 "editKNM_ERKNM.c"

 


	 
# 1611 "editKNM_ERKNM.c"

 


	 
# 1626 "editKNM_ERKNM.c"

	lr_think_time(16);

 


	 
# 1643 "editKNM_ERKNM.c"

 


	web_stop_async("ID=Poll_3", 
		"LAST");

	(web_remove_auto_header("Origin", "ImplicitGen=Yes", "LAST"));

	web_custom_request("settings_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/settings", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knms", 
		"Snapshot=t541.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("published_6", 
		"URL=http://private.proverki.local/erknm-catalogs/api/news/published?type=ANNOUNCEMENT&order=published,desc;", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knms", 
		"Snapshot=t542.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("schedule_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/settings/schedule", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knms", 
		"Snapshot=t543.inf", 
		"Mode=HTML", 
		"LAST");

	web_add_header("Origin", 
		"http://private.proverki.local");

	web_custom_request("find-indexes_3", 
		"URL=http://private.proverki.local/erknm-index/api/knm/find-indexes?page=0&size=50&order=erpId%2Casc", 
		"Method=POST", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knms", 
		"Snapshot=t544.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"Body={\"version\":\"ERKNM\"}", 
		"LAST");

	web_add_header("Upgrade-Insecure-Requests", 
		"1");

	web_url("819254_12", 
		"URL=http://private.proverki.local/private/knm/819254", 
		"Resource=0", 
		"Referer=", 
		"Snapshot=t545.inf", 
		"Mode=HTML", 
		"EXTRARES", 
		"Url=/erknm-catalogs/api/public-portal-url", "ENDITEM", 
		"LAST");

	web_url("extendedprofile_4", 
		"URL=http://private.proverki.local/public/api/access-manager/api/users/current/extendedprofile", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t546.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("organizations_7", 
		"URL=http://private.proverki.local/erknm-catalogs/api/general-info/organizations", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t547.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("checklist-answer-types_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/checklist-answer-types", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t548.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("knm-document-types_5", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/knm-document-types", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t549.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("knm-notice-methods_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/knm-notice-methods", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t550.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("knm-document-types_6", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-document-types", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t551.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("knm-expert-types_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-expert-types", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t552.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("knm-responsible-types_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-responsible-types", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t553.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("responsibility-type_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/responsibility-type", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t554.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("acquaintance-types_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/acquaintance-types", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t555.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("knm-types_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/knm-types?enabled_248=true", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t556.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("kind-result-decision_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/kind-result-decision", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t557.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("organizations_8", 
		"URL=http://private.proverki.local/erknm-catalogs/api/general-info/organizations?withDistrict=true", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t558.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("knm-reason-types_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-reason-types?isPm=false&isPlanned=false", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t559.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_url("roles_4", 
		"URL=http://private.proverki.local/erknm-catalogs/api/admin/news/roles", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t560.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("819254_13", 
		"URL=http://private.proverki.local/erknm-catalogs/api/knm/819254", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t561.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("published_7", 
		"URL=http://private.proverki.local/erknm-catalogs/api/news/published?type=ANNOUNCEMENT&order=published,desc;", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t562.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("danger-class_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/danger-class", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t563.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("kno-organizations_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/kno-organizations", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t564.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("knm-reject-reason-types_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-reject-reason-types?isPlaned=false", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t565.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("knm-plan-reason-change-types_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/erknm/knm-plan-reason-change-types", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t566.inf", 
		"Mode=HTML", 
		"LAST");

	web_add_header("Origin", 
		"http://private.proverki.local");

	web_custom_request("819254_14", 
		"URL=http://private.proverki.local/erknm-editors/api/knm/819254", 
		"Method=PUT", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t567.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("0ae95284-79cd-16d7-817a-0fce4d560592_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/af002594-a4f0-11eb-bcbc-0242ac130002/0ae95284-79cd-16d7-817a-0fce4d560592", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t568.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("0ae96452-7a6d-1eab-817a-75be2a8700d9_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/b6fc9844-a528-11eb-bcbc-0242ac130002/0ae96452-7a6d-1eab-817a-75be2a8700d9", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t569.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("0af4cd2e-78cb-109b-8178-e981258701db_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/1f27d942-a52e-11eb-bcbc-0242ac130002/0af4cd2e-78cb-109b-8178-e981258701db", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t570.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("d2ec803a-a53e-11eb-bcbc-0242ac130053_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/d2ec803a-a53e-11eb-bcbc-0242ac130002/d2ec803a-a53e-11eb-bcbc-0242ac130053", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t571.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("links_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/knm/819254/links", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t572.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("0af4cd2e-78cb-109b-8178-d5a7ba1b0018_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/f0f9a79a-a5b3-11eb-bcbc-0242ac130002/0af4cd2e-78cb-109b-8178-d5a7ba1b0018", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t573.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("ccbc95b6-2570-434d-bae0-918cf5be156a_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/a43f056e-b95c-11eb-8529-0242ac130003/ccbc95b6-2570-434d-bae0-918cf5be156a", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t574.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("7a322fc0-a08d-468a-b6e2-6e61b6c2d475_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/a43f056e-b95c-11eb-8529-0242ac130003/7a322fc0-a08d-468a-b6e2-6e61b6c2d475", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t575.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("5_5", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/knm-reason-types/5", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t576.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("a73bdd66-6426-46eb-a1e3-930ea7049b87_2", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/get-dictionary-value/a43f056e-b95c-11eb-8529-0242ac130003/a73bdd66-6426-46eb-a1e3-930ea7049b87", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t577.inf", 
		"Mode=HTML", 
		"LAST");

	web_url("5_6", 
		"URL=http://private.proverki.local/erknm-catalogs/api/catalogs/knm-reject-reason-types/5", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t578.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("supervision-type_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/supervision-type?uuids=0ae95284-79cd-16d7-817a-0fce4d560592", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t579.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("check-list_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/check-list?uuidKno=0ae95284-79cd-16d7-817a-0fce4d560592&uuidSupervision=0af4cd2e-78cb-109b-8178-e981258701db", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t580.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_url("get-kno-supervision-uuid_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/constraint/get-kno-supervision-uuid?knoVersionId=0ae95284-79cd-16d7-817a-0fce4d560592&supervisionVersionId=0af4cd2e-78cb-109b-8178-e981258701db", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t581.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("requirement_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/requirement?uuidKno=0ae95284-79cd-16d7-817a-0fce4d560592&uuidSupervision=0af4cd2e-78cb-109b-8178-e981258701db", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t582.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("knm-kind_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/knm-kind?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t583.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("positions_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/positions?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t584.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("subject-type_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/subject-type?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t585.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("participant-positions_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/participant-positions?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t586.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("subject-sub-kind_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/subject-sub-kind?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t587.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("accepted-document_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/accepted-document?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t588.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_url("get-event-uuid_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/constraint/get-event-uuid?knoSupervisionId=c51b895a-6c36-499b-a038-6f18aa7c2032&knmKindId=d2ec803a-a53e-11eb-bcbc-0242ac130053", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t589.inf", 
		"Mode=HTML", 
		"LAST");

	web_custom_request("risk-indicatory_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/risk-indicatory?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t590.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("subject-kind_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/subject-kind?uniqueUuid=c51b895a-6c36-499b-a038-6f18aa7c2032", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t591.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("risk-category_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/risk-category?uniqueUuid=c6bdabdf-f10d-4a96-ba21-c7976b73ac85", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t592.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_custom_request("event-type_3", 
		"URL=http://private.proverki.local/erknm-catalogs/api/dictionaries/event-type?uniqueUuidEvent=c6bdabdf-f10d-4a96-ba21-c7976b73ac85", 
		"Method=GET", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t593.inf", 
		"Mode=HTML", 
		"EncType=application/json", 
		"LAST");

	web_add_auto_header("Origin", 
		"http://private.proverki.local");

	lr_think_time(8);

 
# 2209 "editKNM_ERKNM.c"
	web_reg_async_attributes("ID=Poll_2", 
		"Pattern=Poll", 
		"URL=http://private.proverki.local/erknm-editors/api/knm/819254", 
		"PollIntervalMs=4000", 
		"RequestCB=Poll_2_RequestCB", 
		"ResponseCB=Poll_2_ResponseCB", 
		"LAST");

	web_custom_request("819254_15", 
		"URL=http://private.proverki.local/erknm-editors/api/knm/819254", 
		"Method=PUT", 
		"Resource=0", 
		"RecContentType=application/json", 
		"Referer=http://private.proverki.local/private/knm/819254", 
		"Snapshot=t594.inf", 
		"Mode=HTML", 
		"LAST");

 


	 
# 2241 "editKNM_ERKNM.c"

 


	 
# 2256 "editKNM_ERKNM.c"

	 

 


	 
# 2273 "editKNM_ERKNM.c"

	 

 


	 
# 2290 "editKNM_ERKNM.c"

	lr_think_time(20);

 


	 
# 2307 "editKNM_ERKNM.c"

 


	web_stop_async("ID=Poll_2", 
		"LAST");

	return 0;
}
# 7 "f:\\erknm\\erknm\\\\combined_ERKNM.c" 2

# 1 "vuser_end.c" 1
vuser_end()
{
	return 0;
}
# 8 "f:\\erknm\\erknm\\\\combined_ERKNM.c" 2

