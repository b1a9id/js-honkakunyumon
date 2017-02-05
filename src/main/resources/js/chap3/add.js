var dat = new Date(2017, 4, 15, 11, 40);

show(dat.toLocaleString());
dat.setMonth(dat.getMonth() + 3);
show(dat.toLocaleString());
dat.setDate(dat.getDate() - 20);
show(dat.toLocaleString());

function show(param) {
    console.log(param);
}