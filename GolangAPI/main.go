package main

import (
"net/http"

	"github.com/gin-gonic/gin"

)

func main() {
	r := gin.Default()
	r.POST("/api/:text", func(c *gin.Context) {
		text := c.Param("text")
		c.JSON(http.StatusOK, map[string]string{
			"text": text,
		})
	})
	r.Run()
}