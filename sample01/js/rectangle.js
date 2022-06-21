onload = function() {
        // 円の数値設定
            const hankei = 240;     // 半径
            const zahyo = 300;      // 円の中心座標: (250,250)
            const lineWidth= 6;     // 枠線の太さ
            const linecolor= "black";

    // 上弦の円
        // HTML文書内でid名を指定した要素をの部分を参照
            var cir_canvas1 = document.getElementById("circle1");
        // 現在ではこのメソッドでは2dのみがサポートされている。
        // canvasを使って平面図形を描くときには2d
            var cir_ctx1 = cir_canvas1.getContext("2d");
        // 塗りつぶす色の指定
            cir_ctx1.fillStyle = 'rgb(255, 255, 255)';
        // パスをリセット
            cir_ctx1.beginPath();
        // 円の座標、半径、弧度の指定
            cir_ctx1.arc(       
                zahyo, zahyo,           // 円の中心座標:(x,y)
                236,                    // 半径
                0 * Math.PI / 180,      // 開始角度: 0度 (0 * Math.PI / 180)
                180 * Math.PI / 180,    // 終了角度: 180度 (180 * Math.PI / 180)
                true                    // 方向: true=反時計回りの円、false=時計回りの円
            );
        // 塗りつぶしの実行
            cir_ctx1.fill();

    // 上弦の円の縁
        var cir_canvas11 = document.getElementById("circle11");
            var cir_ctx11 = cir_canvas11.getContext("2d");
            cir_ctx11.beginPath();
            cir_ctx11.arc(   
                    zahyo, zahyo,           // 円の中心座標:(x,y)
                    hankei,                 // 半径
                    180 * Math.PI / 180,    // 開始角度: 0度 (0 * Math.PI / 180)
                    360 * Math.PI / 180,    // 終了角度: 180度 (180 * Math.PI / 180)
                    false                   // 方向: true=反時計回りの円、false=時計回りの円
                );
            cir_ctx11.strokeStyle = linecolor;
            cir_ctx11.lineWidth = lineWidth;
            cir_ctx11.stroke() ;
    
    // 下弦の円
        var cir_canvas2 = document.getElementById("circle2");
        var cir_ctx2 = cir_canvas2.getContext("2d");
        cir_ctx2.fillStyle = 'rgb(218, 20, 20)';
        cir_ctx2.beginPath();
        cir_ctx2.arc(   
                zahyo, zahyo,           // 円の中心座標:(x,y)
                hankei,                 // 半径
                0 * Math.PI / 180,      // 開始角度: 0度 (0 * Math.PI / 180)
                180 * Math.PI / 180,    // 終了角度: 180度 (180 * Math.PI / 180)
                false                   // 方向: true=反時計回りの円、false=時計回りの円
            );
        cir_ctx2.fill();
        cir_ctx2.strokeStyle = linecolor;
        cir_ctx2.lineWidth = lineWidth;
        cir_ctx2.stroke() ;
}
