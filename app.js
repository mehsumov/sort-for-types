let types = [
  { type: "A", value: "Tesla" },
  { type: "A", value: "GMC" },
  { type: "B", value: "KIA" },
  { type: "C", value: "Dodge" },
  { type: "C", value: "Ford" },
];

let groupTypes = (types) => {
  return types.reduce((acc, item) => {
    let check = acc.find((o) => o.type === item.type);
    if (check) {
      check.value = [check.value, item.value];
    } else {
      acc.push(item);
    }

    return acc;
  }, []);
};

console.log(groupTypes(types));
