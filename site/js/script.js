(function () {
  const form = document.getElementById('form');
  const results = document.getElementById('results');
  const details = document.querySelector('details');
  const defaultValues = {
    paragraphs: 10,
    words: 30,
    format: 'json',
  };

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const filters = ([...new FormData(form).entries()])
      .reduce(
        (acc, [key, value]) => value ? { ...acc, [key]: value } : acc,
        defaultValues
      );

    const url = `/api`;
    const item = await fetch(url)
      .then(res => res.json())
      .then(res => JSON.stringify(res, null, 4));

    results.innerText = item;
    details.open = true;
  });
}());
