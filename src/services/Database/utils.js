export const handleError = (err) => {
  throw (err || err.message);
};

export const addFieldNamesToResults = (results, map) => {
  if (!results || !map || !results[0] || (results[0].length !== map.length)) {
    return results;
  }
  return results.map((record) => {
    const row = {};
    record.forEach((val, i) => {
      row[map[i][1]] = val;
    });
    return row;
  });
};

export const replaceAll = (text, find, replace) => (text.split(find).join(replace));

/**
 * Merge headings with rows to create an array of objects
 * @param   params  result object from node-oracle query
 * @returns array of row objects with column names as keys
 */
export const mergeHeaders = ({ metaData, rows }) => {
  if (!rows || !metaData || rows.length === 0) { return rows; }
  const keys = Object.values(metaData).map(o => o.name);
  return rows.map((row) => {
    const merged = {};
    row.forEach((field, i) => {
      merged[keys[i]] = field;
    });
    return merged;
  });
};
