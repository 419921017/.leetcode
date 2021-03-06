/*
 * @lc app=leetcode.cn id=27 lang=golang
 *
 * [27] 移除元素
 */
package main

func main() {
	removeElement([]int{3, 2, 2, 3}, 3)
}

// @lc code=start
func removeElement(nums []int, val int) int {
	for i := 0; i < len(nums); {
		if nums[i] == val {
			nums = append(nums[:i], nums[i+1:]...)
		} else {
			i++
		}
	}
	return len(nums)
}

// @lc code=end
