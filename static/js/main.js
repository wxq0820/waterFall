$(function () {

    // var colHeight = []
    // var imgHeight = $('.waterfall img').outerWidth(true)
    // var colCount = Math.floor($('.waterfall').width() / imgHeight)

    // for (var i = 0; i < colCount; i++) {
    //     colHeight[i] = 0
    // }
    // $('.waterfall img').on('load', function () {
    //     var minIndex = 0
    //     var minHeight = colHeight[0]
    //     for (var i = 0; i < colCount; i++) {
    //         if (minHeight > colHeight[i]) {
    //             minHeight = colHeight[i]
    //             minIndex = i
    //         }
    //     }
    //     $(this).css({
    //         top: minHeight,
    //         left: minIndex * imgHeight
    //     })
    //     colHeight[minIndex] += $(this).outerHeight(true)
    // })

    // $(window).on('resize', function () {
    //     colCount = Math.floor($('.waterfall').width() / imgHeight)
    //     for (var i = 0; i < colCount; i++) {
    //         colHeight[i] = 0
    //     }
    //     $('.waterfall img').each(function () {
    //         var minIndex = 0
    //         var minHeight = colHeight[0]
    //         for (var i = 0; i < colCount; i++) {
    //             if (minHeight > colHeight[i]) {
    //                 minHeight = colHeight[i]
    //                 minIndex = i
    //             }
    //         }
    //         $(this).css({
    //             top: minHeight,
    //             left: minIndex * imgHeight
    //         })
    //         colHeight[minIndex] += $(this).outerHeight(true)
    //     })

    // })

    var waterfall = {
        init: function () {
            this.colHeight = []
            this.$img = $('.waterfall img')
            this.imgHeight = this.$img.outerWidth(true)
            this.colCount = Math.floor($('.waterfall').width() / this.imgHeight)
            for (var i = 0; i < this.colCount; i++) {
                this.colHeight[i] = 0
            }
            this.bind()
        },
        bind: function () {
            var that = this
            this.$img.on('load', function () {
                that.showImg($(this))
            })

            $(window).on('resize', function () {
                that.colCount = Math.floor($('.waterfall').width() / that.imgHeight)
                for (var i = 0; i < that.colCount; i++) {
                    that.colHeight[i] = 0
                }
                console.log(that.colCount)
                that.$img.each(function () {
                    that.showImg($(this))
                })
            })
        },
        showImg: function ($node) {
            var minIndex = 0
            var minHeight = this.colHeight[0]
            for (var i = 0; i < this.colCount; i++) {
                if (minHeight > this.colHeight[i]) {
                    minHeight = this.colHeight[i]
                    minIndex = i
                }
            }
            $node.css({
                top: minHeight,
                left: minIndex * this.imgHeight
            })
            this.colHeight[minIndex] += $node.outerHeight(true)
            $('.waterfall').height(Math.max.apply(null,this.colHeight))
        }
    }

    waterfall.init()
})