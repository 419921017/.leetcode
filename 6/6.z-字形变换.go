/*
 * @lc app=leetcode.cn id=6 lang=golang
 *
 * [6] Z 字形变换
 */
package main

import "strings"

// @lc code=start
func convert(s string, numRows int) string {
	if numRows == 1 {
		return s
	}

	var b = []rune(s)
	var res = make([]string, numRows)
	var length = len(b)
	var period = numRows*2 - 2
	for i := 0; i < length; i++ {
		var mod = i % period
		if mod < numRows {
			res[mod] += string(b[i])
		} else {
			res[period-mod] += string(b[i])
		}
	}
	return strings.Join(res, "")
}

// @lc code=end
