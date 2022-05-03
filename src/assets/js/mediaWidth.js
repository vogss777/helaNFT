export const scrrenTypeList = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']; // 'xs', 'sm', 'md', 'lg', 'xl', 'xl'
export const scrrenWdithList = ['320', '480', '768', '992', '1200', '1600'];
export function setScrrenType(val) {
	let array = scrrenWdithList;
	if (val < Math.min.apply(null, array)) {
		return 0;
	}
	//如果值大于revenue最大的值时，则奖励最高一档
	if (val > Math.max.apply(null, array)) {
		return array.length - 1;
	}
	var idx = 0,
		i = 0,
		j = array.length;
	for (; i < j; i++) {
		if (array[i] > val) {
			idx = i;
			break;
		}
	}
	return idx - 1;
}
