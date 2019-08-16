import React,{useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import $ from "jquery";
import mask from 'jquery-mask-plugin'
import AOS from 'aos'
import Banner from "./Banner";
import About from "./About";
import Solutions from "./Solutions";
export function Main() {

    {useEffect(()=>{
        function f() {
            $(document).ready(function(){
                console.log( "ready!" );

                $('.scrolldown').click(function(){
                    $('html, body').animate({scrollTop: $('.sobre').offset().top }, 'slow');
                });

                $('.scrolldown-sz').click(function(){
                    $('html, body').animate({scrollTop: $('.sobre-sz').offset().top }, 'slow');
                });

                $('.scrolldown-invs').click(function(){
                    $('html, body').animate({scrollTop: $('.sobre-invs').offset().top }, 'slow');
                });

                $(function() {
                    AOS.init({
                        easing: 'ease-out-back',
                        duration: 1000
                    });
                });


                var maskBehavior = function (val) {
                        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
                    },
                    options = {onKeyPress: function(val, e, field, options) {
                            field.mask(maskBehavior.apply({}, arguments), options);
                        }
                    };

                $(document).ready(function($){
                    $('.mask_date').mask('00/00/0000');
                    $('.mask_time').mask('00:00:00');
                    $('.mask_date_time').mask('00/00/0000 00:00:00');
                    $('.mask_cep').mask('00000-000');
                    $('.mask_cpf').mask('000.000.000-00', {reverse: true});
                    $('.mask_money').mask('000.000.000.000.000,00', {reverse: true});
                    $('.mask_phone').mask(maskBehavior, options);
                });



                var activeLink = document.querySelectorAll(".link");
                var teste = Array.from(activeLink).map(elem => {
                    if (elem.getAttribute('data-link') === 'true') {
                        elem.classList.add('active-link');
                    }
                });
            });



        }
        f()
    })}

    return(
    <html lang="pt">

    <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        {/*<meta http-equiv="X-UA-Compatible" content="ie=edge"/>*/}
        <title>Concore</title>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700,900&amp;display=swap"/>
    </head>

    <body>
    <Header/>

    <Banner/>
    <About/>

    <Solutions/>

    <Footer/>

    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
    <script src="assets/js/aos.min.js"></script>
    <script src="assets/js/funcoes.js"></script>

    </body>
    </html>
    )
}
