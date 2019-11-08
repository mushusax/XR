BeginPackage["XRObject`"];

AddTwo::usage =
"AddTwo[\!\(\*StyleBox[\"a\", \"TI\"]\), \!\(\*StyleBox[\"b\", \"TI\
\"]\)] returns \!\(\*StyleBox[\"a\", \"TI\"]\)+\!\(\*StyleBox[\"b\", \
\"TI\"]\).";
DotTwo::usage =
"DotTwo[\!\(\*StyleBox[\"a\", \"TI\"]\), \!\(\*StyleBox[\"b\", \"TI\
\"]\)] returns \!\(\*StyleBox[\"a\", \"TI\"]\)*\!\(\*StyleBox[\"b\", \
\"TI\"]\).";







AddTwo::argnum =
"AddTwo was called with `1` arguments. It expected 2.";
DotTwo::argnum =
"DotTwo was called with `1` arguments. It expected 2.";

Begin["`Private`"];
AddTwo[a_, b_] := a + b
AddTwo[args___] := (Message[AddTwo::argnum, Length[{args}]]; $Failed)
DotTwo[a_, b_] := a*b
DotTwo[args___] := (Message[DotTwo::argnum, Length[{args}]]; $Failed)
End[];

EndPackage[];