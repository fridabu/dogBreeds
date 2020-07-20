import db from "./index";

const getDogs = () =>
  new Promise(async (resolve, reject) => {
    const alertsRef = db.collection("dogs");
    try {
      const doc = await alertsRef.get();
      var result = [];
      doc.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
      });
      console.log(result);

      resolve(result);
    } catch (e) {
      reject(e);
    }
  });

export default getDogs;
