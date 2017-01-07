import $ from '../../../www/static/js/jquery.min';

//case
export const TEST = "TEST";

//action create function

/* async action will be block by redux-thunk middleware, send to parameters dispatch, getState and wait
for execute.
*/
export function testFunc(){
	return function (dispatch, getState){
		$.ajax({
			url: "/index/test",
			type: "post",
			success: function (data){
				console.log(data);
				dispatch({ type: TEST, value: data.data[0].mobile});
			}.bind(this),
			error: function(){
				console.log("data获取失败～");
			}.bind(this)
		})
	}
}