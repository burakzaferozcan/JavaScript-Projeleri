const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
    counter.textContent = "0";
    const updateFollowers = () => {
        const target = counter.getAttribute("data-target");
        const increment = target / 300;
        const c = Number(counter.textContent);
        if (c < target) {
            counter.textContent = Math.ceil(c + increment)
            setTimeout(updateFollowers, 1);
        } else {
            counter.textContent = target;
        };
    };
    updateFollowers();
});