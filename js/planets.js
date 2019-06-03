$(function(){
    $.fn.inputFilter = function(inputFilter) {
        return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
          if (inputFilter(this.value)) {
            this.oldValue = this.value;
            this.oldSelectionStart = this.selectionStart;
            this.oldSelectionEnd = this.selectionEnd;
          } else if (this.hasOwnProperty("oldValue")) {
            this.value = this.oldValue;
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
          }
        });
      };
    $('#ageId').keyup(function(){
        var age = parseInt($('#ageId').val());
        if(!isNaN(age)){
            $('#ageMercury').text('Age in Mercury : '+((age * 365)/88).toFixed(2));
            $('#ageVenus').text('Age in Venus : '+((age * 365)/225).toFixed(2));
            $('#ageEarth').text('Age in Earth : '+ ((age * 365)/365).toFixed(2));
            $('#ageMars').text('Age in Mars : '+((age * 365)/687).toFixed(2));
            $('#ageJupiter').text('Age in Jupiter : '+((age * 365)/(11.8*365)).toFixed(2));
            $('#ageSaturn').text('Age in Saturn : '+ ((age * 365)/(29.4*365)).toFixed(2));
            $('#ageUranus').text('Age in Uranus : '+((age * 365)/(84*365)).toFixed(2));
            $('#ageNeptune').text('Age in Neptune : '+((age * 365)/(164.8*365)).toFixed(2));
            $('#agePluto').text('Age in Pluto : '+ ((age * 365)/(248*365)).toFixed(2));
        }
    });

    $('#weightId').keyup(function(){
        var weight = parseInt($('#weightId').val());
        if(!isNaN(weight)){
            $('#weightMercury').text('Weight in Mercury : '+(weight * .38).toFixed(2));
            $('#weightVenus').text('Weight in Venus : '+(weight * .9).toFixed(2));
            $('#weightEarth').text('Weight in Earth : '+ (weight * 1).toFixed(2));
            $('#weightMars').text('Weight in Mars : '+(weight * .38).toFixed(2));
            $('#weightJupiter').text('Weight in Jupiter : '+(weight * 2.34).toFixed(2));
            $('#weightSaturn').text('Weight in Saturn : '+ (weight * 1.08).toFixed(2));
            $('#weightUranus').text('Weight in Uranus : '+(weight * .8).toFixed(2));
            $('#weightNeptune').text('Weight in Neptune : '+(weight * 1.12).toFixed(2));
            $('#weightPluto').text('Weight in Pluto : '+ (weight * 0.07).toFixed(2));
        }
    });

    $("#ageId").inputFilter(function(value) {
        return /^\d*$/.test(value); 
    });

    $("#weightId").inputFilter(function(value) {
        return /^\d*$/.test(value); 
    });
});

