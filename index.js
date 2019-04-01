// Code your solution here:

function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(findDriver){
    return findDriver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue){
  const rev = drivers.filter(function(findDriver){
    return findDriver.revenue > revenue;
  });
  return rev.map(function(name){
    return name.name;
  });
}

function exactMatch(drivers, obj){
  for (const key in obj){
    return drivers.filter(findDriver => findDriver[key] === obj[key])
  };
}

function exactMatchToList(drivers, obj){
  const list = exactMatch(drivers, obj);
  return list.map(function(name){
    return name.name
  });

}
