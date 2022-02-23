export const list = [
	{name: "Home", path: "/"},
	{name: "IKcco Opener", path: "/ikcco"},
	{name: "IKcco Opener (O-Based)", path: "/ikcco-o-based"},
	{name: "Donation", path: "/donation", subs: [
		{name: "SL Donation", path: "/donation/sl"},
		{name: "IL Donation", path: "/donation/il"},
		{name: "Double-Triple Donation", path: "/donation/double-triple"}
	]},
	{name: "Out of Order", path: "/out-of-order"},
	{name: "Tetr.io 180 spins", path: "/tetrio-180"},
  {name: "Perfect Clear Tables", path: "/pc-table"}
];

export const map = new Map;

buildMap(list);

function buildMap(l) {
  for (const i of l) {
    map.set(i.path, i);
    if (i.subs) {
      buildMap(i.subs);
    }
  }
}
