
class factory {
    static setTimeout = null 
    static office_converter
    static phone_reg = /^(1\d{10})$/

    constructor() {
    }
    static get_phone_reg = function(phone){
        return this.phone_reg.test(phone)
    }


    //延迟执行函数
    static delay_fun = function(cb, ts) {
        clearTimeout(this.setTimeout)
        this.setTimeout = setTimeout(cb, ts)
    }

    static get_y_m_d(ts) {
        let date

        if (ts) {
            date = new Date(ts)
        } else {
            date = new Date()
        }

        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        if (month < 10) {
            month = '0' + month
        }
        if (day < 10) {
            day = '0' + day
        }
        let nowDate = year + '-' + month + '-' + day
        return nowDate
    }

    


    /*
       数字转中文
       @number {Integer} 形如123的数字
       @return {String} 返回转换成的形如 一百二十三 的字符串            
    */
    static numberToChinese(number) {
        let chars = '零一二三四五六七八九',
            units = '个十百千万@#%亿^&~'
        var a = (number + '').split(''),
            s = []
        if (a.length > 12) {
            throw new Error('too big')
        } else {
            for (var i = 0, j = a.length - 1; i <= j; i++) {
                if (j == 1 || j == 5 || j == 9) {
                    //两位数 处理特殊的 1*
                    if (i == 0) {
                        if (a[i] != '1') s.push(chars.charAt(a[i]))
                    } else {
                        s.push(chars.charAt(a[i]))
                    }
                } else {
                    s.push(chars.charAt(a[i]))
                }
                if (i != j) {
                    s.push(units.charAt(j - i))
                }
            }
        }
        //return s;
        return s
            .join('')
            .replace(/零([十百千万亿@#%^&~])/g, function(m, d, b) {
                //优先处理 零百 零千 等
                b = units.indexOf(d)
                if (b != -1) {
                    if (d == '亿') return d
                    if (d == '万') return d
                    if (a[j - b] == '0') return '零'
                }
                return ''
            })
            .replace(/零+/g, '零')
            .replace(/零([万亿])/g, function(m, b) {
                // 零百 零千处理后 可能出现 零零相连的 再处理结尾为零的
                return b
            })
            .replace(/亿[万千百]/g, '亿')
            .replace(/[零]$/, '')
            .replace(/[@#%^&~]/g, function(m) {
                return {
                    '@': '十',
                    '#': '百',
                    '%': '千',
                    '^': '十',
                    '&': '百',
                    '~': '千'
                }[m]
            })
            .replace(/([亿万])([一-九])/g, function(m, d, b, c) {
                c = units.indexOf(d)
                if (c != -1) {
                    if (a[j - c] == '0') return d + '零' + b
                }
                return m
            })
    }

    static chineseToNumber(up_zhangjie_num) {
        let arrstr = up_zhangjie_num.split('零')
        let number = 0
        const unitChar = ['', '十', '百', '千', '万']
        const chnNumChar = [
            '',
            '一',
            '二',
            '三',
            '四',
            '五',
            '六',
            '七',
            '八',
            '九'
        ]
        arrstr.forEach(str => {
            let ws = 0,
                temp = ''
            unitChar.forEach(
                (item, index) => str.indexOf(item) > -1 && (ws = index)
            )
            for (var i = 0; i < str.length; i++) {
                let num = chnNumChar.indexOf(str[i])
                if (num < 0 && str[i] == '十') {
                    if (i == 0) num = 1
                    else if (ws > 0) num = ''
                    // 三位数及以上
                    else num = 0
                }
                if (num != -1) temp += '' + num
            }
            while (ws + 1 > temp.length) {
                temp += '' + '0'
            }
            number += parseInt(temp)
        })
        return number
    }


    
}


export default {
    phone_reg_fag:factory.get_phone_reg
}
