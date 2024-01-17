function convertToCamelCase(underscoreString) {
    const words = underscoreString.split('_');
    const camelCasedWords = words.map((word, index) => {
      if (index === 0) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return camelCasedWords.join('');
  }
  
  // Danh sách các biến đầu vào
  const variables = [
    'underscore_case',
    'first_name',
    'Some_Variable',
    'calculate_AGE',
    'delayed_departure',
  ];
  
  // Chuyển đổi và in ra kết quả
  variables.forEach(variable => {
    const camelCaseVariable = convertToCamelCase(variable);
    const checkMarks = '✅'.repeat(camelCaseVariable.length);
    console.log(`${camelCaseVariable} ${checkMarks}`);
  });
