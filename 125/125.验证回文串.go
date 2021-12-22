package main

import (
	"regexp"
	"strings"
)

/*
 * @lc app=leetcode.cn id=125 lang=golang
 *
 * [125] 验证回文串
 */

// @lc code=start
func isPalindrome(s string) bool {

	return false
}

// 筛选 + 判断
// 1. 筛选字符串和数字
// 1. 颠倒顺序判断是否相等
func isPalindrome1(s string) bool {
	s = strings.ToLower(s)
	reg := regexp.MustCompile(`[^a-zA-Z0-9]`)
	s = reg.ReplaceAllString(s, "")

	return s == reverseString(s)
}

func isPalindrome2(s string) bool {
	s = strings.ToLower(s)
	reg := regexp.MustCompile(`[^a-zA-Z0-9]`)
	s = reg.ReplaceAllString(s, "")
	x, y := 0, len(s)-1
	for x < y {
		if s[x] != s[y] {
			return false
		}
		x++
		y--
	}
	return true
}

func isPalindrome3(s string) bool {
	s = strings.ToLower(s)
	x, y := 0, len(s)-1
	for x < y {
		for x < y && !isalnum(s[x]) {
			x++
		}
		for x < y && !isalnum(s[y]) {
			y--
		}
		if x < y {
			if s[x] != s[y] {
				return false
			}
			x++
			y--
		}
	}

	return true
}

func isalnum(ch byte) bool {
	return (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9')
}

func reverseString(s string) string {
	runes := []rune(s)
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}

func main() {
	s := "A man, a plan, a canal: Panama"
	isPalindrome(s)
}

// @lc code=end
