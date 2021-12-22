/*
 * @lc app=leetcode.cn id=6 lang=golang
 *
 * [6] Z 字形变换
 */

// @lc code=start
func convert(s string, numRows int) string {
	arr := make([numRows]rune{})
 	chars:=	stings.Split(s, '')
	perovid := numRows * 2 - 2
	for i, v := range chars {
		mod := i % perovid
		if (mod < numRows) {
			arr[i] += v
		} else{
			arr[numRows - mod]+= v
		}
	}
	fmt.printf(arr)
	str := ""
	for _, v := range arr {
		str+=v
	}
	return str
}

// @lc code=end

