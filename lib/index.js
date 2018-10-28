var escape = require("escape-string-regexp");

function render(input, target, marker){

    var lines = input.split("\n");

    var general = "*";

    var sections = [];
    var section = [];

    var sectionMarker = marker || "@@@";
    var escapedSectionMarker = escape(sectionMarker);

    var targetID = target || general;

    var sectionPatternString = "^" + escapedSectionMarker + "(.*)" + escapedSectionMarker + "$";
    var sectionPattern = new RegExp(sectionPatternString);

    var appliesTo = [];

    for(i = 0; i < lines.length; i++){

        if (lines[i].match(sectionPattern)){
            sections.push([appliesTo,section]);
            section = [];
            var headerMatches = lines[i].match(sectionPattern)[1].split(" ");
            appliesTo = [];
            for(j = 0; j < headerMatches.length; j++){
                if(headerMatches[j] != ""){
                    appliesTo.push(headerMatches[j]);
                }
            }
        }
        else{
            section.push(lines[i]);
        }
    }

    sections.push([appliesTo,section]);

    var scopedSections = [];

    for(i = 0; i < sections.length; i++){
        if(sections[i][0].indexOf(targetID) > -1 | sections[i][0].indexOf(general) > -1){
            scopedSections.push(sections[i][1]);
        }
    }

    var output = "";

    for(i = 0; i < scopedSections.length; i++){
        for(j = 0; j < scopedSections[i].length; j++){
            output = output + scopedSections[i][j];
            if(i != (scopedSections.length) && j != (scopedSections.length[i])){
                output = output + "\n";
            }
        }
    }

    return output;
}

var apposite = {
    render: render
};

module.exports = apposite;
