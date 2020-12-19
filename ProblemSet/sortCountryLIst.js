/*
The whole interview took 1 hour.
15 minutes of that was spent on him asking me what projects I've worked on that I'm proud of.
40 minutes on coding this. 5 minutes on asking questions about the job/company.
Their backend tech stack is in Python, so the .py file is for that.
But he made a .js file for me since I said I primarily work in Javascript.
When I was stuck, he'd give a hint.
When given hints, I almost always got it immediately.
He always asked about the best practices of where to put what code.
When manipulating variables, he asked me what the big O is, and how to optimize it.

Part 1:
Assume ‘en’, ‘es’, etc are strings pulled from an API, and its corresponding language names
may not necessarily be ‘English’ or ‘Spanish’, but can be ‘英文‘ or ‘西班牙文’
or in any other languages based on user settings.
So the only universal strings are the two-letter acronym of each language.

The commonly used languages should be in this order:
    commonly_used_languages = [
      "en", // English
      "es", // Spanish
      "de", // German
      "fr", // French
    ]
All non-commonly used languages should be in alphabetic order after the commonly used languages.

More specifically, this is the dropdown that you should be printing out in the end, when you run this file:
<select name="primary_language">
 <option value="en">English</option>
 <option value="es">Spanish</option>
 <option value="de">German</option>
 <option value="fr">French</option>
 <option value="ar">Arabic</option>
 <option value="el">Greek</option>
 <option value="it">Italian</option>
 <option value="ja">Japanese</option>
 <option value="pt">Portuguese</option>
 <option value="tr">Turkish</option>
</select>

Part 2:
Built on part 1.
Create another drop down menu called SecondaryLangDropdown, where everything is the same as the PrimaryLangDropdown,
except that the most common languages are 'fr' and 'de'.
*/

class Languages {
  static get all () {
    // assume this is imported from an external file
    return [
      ['de', 'German'],
      ['el', 'Greek'],
      ['en', 'English'],
      ['es', 'Spanish'],
      ['fr', 'French'],
      ['pt', 'Portuguese'],
      ['it', 'Italian'],
      ['tr', 'Turkish'],
      ['ja', 'Japanese'],
      ['ar', 'Arabic'],
    ];
  }
}

class Component {
  static render() {
    console.log("[Component]");
  }
}

class PageTitle {
  static render() {
    console.log("--- Demo Page ---");
  }
}

class Dropdown extends Component {
  static inputName() {
    return 'dropdown';
  }
  static asArray() {
    return [];
  }
  static render() {
    console.log(`<select name="${this.inputName()}">`);
    for (var l of this.asArray()) {
      console.log(` <option value="${l[0]}">${l[1]}</option>`)
    }
    console.log('</select>');
  }
}

class PrimaryLangDropdown extends Dropdown{
  static inputName() {
    return "primary_language";
  }
  static asArray(){
    return Languages.all.sort((a, b) => a[1] > b[1]);
  }
}


/* ---------------------------------------*/

var components = [PageTitle, PrimaryLangDropdown];
for (var c of components) {
  c.render();
}

class PrimaryLangDropdown extends Dropdown{
  static inputName() {
    return "primary_language";
  }
  static asArray(){
    const pulledFromAPI = [
      "en", // English
      "es", // Spanish
      "de", // German
      "fr", // French
    ]
// return if current language doesn't match with a commonLang
const nonCommonLang = Languages.all.filter(language => {
return !pulledFromAPI.includes(language[0])
})

const commonLang = pulledFromAPI.map((value, index) => {
const indexOneEl = Languages.all.find((language, index) => {
return Languages.all[index][0] === value
})
return indexOneEl; /** the matching subarray */
})

    return commonLang.concat(nonCommonLang.sort((a, b) => a[0] > b[0]));
  }
}