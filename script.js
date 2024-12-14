      // Initially, all the selectors should be hidden
      document.addEventListener("DOMContentLoaded", function () {
        const selectors = document.querySelectorAll(".selectors");
        selectors.forEach((selector) => {
          selector.style.display = "none";
        });
      });

      // Function to handle option selection
      function selectOption(option) {
        const boxes = document.querySelectorAll(".option-box");
        const selectors = document.querySelectorAll(".selectors");

        boxes.forEach((box, index) => {
          const selector = selectors[index];
          if (index === option - 1) {
            box.classList.add("active");
            selector.style.display = "block"; // Show the clicked option's selector
          } else {
            box.classList.remove("active");
            selector.style.display = "none"; // Hide other selectors
          }
        });
      }