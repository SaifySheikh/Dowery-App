document.getElementById('calculateBtn').addEventListener('click', () => {
    // Input values
    const ageInput = parseInt(document.getElementById('age').value);
    const age = ageInput * 10;
    let salary = parseInt(document.getElementById('salary').value) / 10;
    const smoke = parseInt(document.getElementById('smoke').value);
    const alcohol = parseInt(document.getElementById('alcohol').value);
    const looks = parseInt(document.getElementById('looks').value) * 100;
    const fitness = parseInt(document.getElementById('fitness').value);
    const vehicle = parseInt(document.getElementById('vehicle').value);
    const cooking = parseInt(document.getElementById('cooking').value);
    const humor = parseInt(document.getElementById('humor').value);
    const pet = parseInt(document.getElementById('pet').value);
    const travel = parseInt(document.getElementById('travel').value);
    const tech = parseInt(document.getElementById('tech').value);
    const lazy = parseInt(document.getElementById('lazy').value);

    let salaryPenalty = 0;
    if (parseInt(document.getElementById('salary').value) < 20000) {
      salaryPenalty = -1000; 
    }

    let ageMessage = '';
    if (ageInput > 65) {
      ageMessage = "Abhi toh tere pota-poti khilane ki umar hai, tau! 👴👵";
    } else if (ageInput > 50) {
      ageMessage = "Abhi toh tere bete ki shaadi ki umar hai! 😆";
    } else if (ageInput > 40) {
      ageMessage = "Abhi thodi mushkil hai bhai, Russian hi dekh le... 😅";
    }

    // Calculate total score
    const totalScore =
      age +
      salary +
      smoke +
      alcohol +
      looks +
      fitness +
      vehicle +
      cooking +
      humor +
      pet +
      travel +
      tech +
      lazy +
      salaryPenalty;

    const dowry = totalScore * 500; 

    let message = '';
    if (salaryPenalty < 0) {
      message = "Kama le bhai, Russian ko bhi 6000₹ lgte hai! 😂"; 
    } else if (dowry < 50000) {
      message = `₹${dowry.toLocaleString()} - Bhai, abhi toh rishta ka poster bhi nahi chipkega! 😂 Time to upgrade.`;
    } else if (dowry < 100000) {
      message = `₹${dowry.toLocaleString()} - Rishta aayega, lekin mom-dad puja karwayenge pehle. 🕯️📿`;
    } else if (dowry < 200000) {
      message = `₹${dowry.toLocaleString()} - Rishtedar ne ghanti bajai hai! Hero ban rahe ho. 🎉💼`;
    } else if (dowry < 500000) {
      message = `₹${dowry.toLocaleString()} - Dulhan ready hai, baraat me DJ bhi book ho gaya! 💃🕺`;
    } else if (dowry < 1000000) {
      message = `₹${dowry.toLocaleString()} - King material! Shaadi ka venue Taj Mahal ka garden. 🏰💎`;
    } else if (dowry < 5000000) {
      message = `₹${dowry.toLocaleString()} - Ambani ka relative lag rahe ho! Private jet aur diamond ring confirm. 🛩️💍`;
    } else if (dowry < 10000000) {
      message = `₹${dowry.toLocaleString()} - Netflix documentary ban rahi hai tumhari shaadi pe! 📺🍿`;
    } else {
      message = `₹${dowry.toLocaleString()} - Bhai tu Elon Musk ka jija ban gaya! Mars honeymoon confirm. 🚀🌕`;
    }

    if (salaryPenalty !== -1000) {
      if (looks >= 500 && humor >= 300) {
        message += " Aur haan, bonus me ek Shehzadi jaisi dulhan FREE! 👸💖";
      } else if (smoke < 0 && alcohol < 0) {
        message += " Lekin tera rishta sirf baba ki gufa tak pahuch raha hai! 🚩🧘‍♂️";
      } else if (lazy > 300) {
        message += " WARNING: Rishtedar ne kaha hai ghanti baja ke bhag jayenge! 😅🚪";
      }
    }

    if (ageMessage) {
      message = `${ageMessage} ${message}`;
    }

    // Display the result
    document.getElementById('result').innerHTML = message;
  });
