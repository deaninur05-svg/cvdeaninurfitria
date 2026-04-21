$(document).ready(function(){

  
    function loadPage(page){
        $("#content").fadeOut(200, function(){
            $("#content").load(page, function(){

                // scroll ke atas tiap pindah page
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

                $("#content").fadeIn(300);
            });
        });
    }

   
    loadPage("home.html");

    
    $(".nav-menu a").click(function(e){
        e.preventDefault();

        $(".nav-menu a").removeClass("active");
        $(this).addClass("active");

        let page = $(this).data("page");
        loadPage(page);

        // auto close menu mobile
        $("#nav-menu").removeClass("show");
    });

    // =========================
    // 🍔 HAMBURGER MENU
    // =========================
    $("#menu-toggle").click(function(){
        $("#nav-menu").toggleClass("show");
    });

    // =========================
    // ✨ ACTIVE MENU AUTO (SCROLL EFFECT)
    // =========================
    $(window).on("scroll", function(){
        if($(this).scrollTop() > 50){
            $(".navbar").css("box-shadow", "0 4px 10px rgba(0,0,0,0.2)");
        } else {
            $(".navbar").css("box-shadow", "none");
        }
    });

    // =========================
    // 💾 SIMPAN FORM OTOMATIS
    // =========================
    $(document).on("input", "#nama, #email, #pesan", function(){
        localStorage.setItem("nama", $("#nama").val());
        localStorage.setItem("email", $("#email").val());
        localStorage.setItem("pesan", $("#pesan").val());
    });

    // =========================
    // 📥 LOAD DATA FORM
    // =========================
    window.loadFormData = function(){
        $("#nama").val(localStorage.getItem("nama") || "");
        $("#email").val(localStorage.getItem("email") || "");
        $("#pesan").val(localStorage.getItem("pesan") || "");
    };

    // =========================
    // ✅ VALIDASI FORM
    // =========================
    window.validateForm = function(){
        let valid = true;

        let nama = $("#nama").val().trim();
        let email = $("#email").val().trim();
        let pesan = $("#pesan").val().trim();

        $("#errNama").text("");
        $("#errEmail").text("");
        $("#errPesan").text("");

        if(nama === ""){
            $("#errNama").text("Nama wajib diisi");
            valid = false;
        }

        if(email === ""){
            $("#errEmail").text("Email wajib diisi");
            valid = false;
        }

        if(pesan === ""){
            $("#errPesan").text("Pesan wajib diisi");
            valid = false;
        }

        // efek shake kalau error
        if(!valid){
            $(".card").addClass("shake");
            setTimeout(() => $(".card").removeClass("shake"), 400);
        }

        return valid;
    };

});