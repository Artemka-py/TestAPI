package main

import "github.com/gin-gonic/gin"

func main() {
	r := gin.Default()
	r.POST("/api/:text", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"text": c.Param("text"),
		})
	})
	r.Run()
}