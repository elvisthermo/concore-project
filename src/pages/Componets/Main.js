import React,{useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import $ from "jquery";
import mask from 'jquery-mask-plugin';
import AOS from 'aos'
import Banner from "./Banner";
import About from "./About";
import Solutions from "./Solutions";
export function Main() {

    {useEffect(()=>{
        function f() {
            $(document).ready(function(){
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
    <>


    <Header/>

    <Banner/>
    <About/>

    <Solutions/>

    <Footer/>

    </>

    )
}
