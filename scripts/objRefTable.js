const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Plugins.Button,
		C3.Plugins.TiledBg,
		C3.Plugins.Text,
		C3.Plugins.Browser,
		C3.Plugins.Touch,
		C3.Plugins.progressbar,
		C3.Plugins.Mouse,
		C3.Behaviors.Tween,
		C3.Behaviors.MoveTo,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.TiledBg.Acts.SetX,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Text.Acts.SetPos,
		C3.Plugins.System.Acts.SetTimescale,
		C3.Plugins.Touch.Cnds.OnTouchStart,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.RotateClockwise,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Behaviors.MoveTo.Acts.MoveToPosition,
		C3.Plugins.TiledBg.Cnds.CompareX,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.TiledBg.Exps.X,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Text.Acts.MoveToTop,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Browser.Acts.Close
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{Bird: 0},
	{ButtonPlay: 0},
	{TiledBackground: 0},
	{TiledBackground2: 0},
	{Background: 0},
	{Scored: 0},
	{BottomPipe: 0},
	{TopPipe: 0},
	{ScoreText: 0},
	{Sprite: 0},
	{Browser: 0},
	{Touch: 0},
	{ProgressBar: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{BUTTONPLAY2: 0},
	{Mouse: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Sprite7: 0},
	{BaggrounLv2: 0},
	{Sprite8: 0},
	{Sprite9: 0},
	{Sprite10: 0},
	{soal: 0},
	{Sprite11: 0},
	{jawaban_a: 0},
	{No: 0},
	{Sprite12: 0},
	{patoksoal: 0},
	{Tween: 0},
	{MoveTo: 0},
	{kunci: 0},
	{Sprite13: 0},
	{soal2: 0},
	{ja: 0},
	{jb: 0},
	{jc: 0},
	{jd: 0},
	{WINNER: 0},
	{SecondsPerObstacle: 0},
	{JumpStrength: 0},
	{SCROLLSPEED: 0},
	{Score: 0},
	{pause: 0},
	{point_soal: 0},
	{nyawa: 0}
];

self.InstanceType = {
	Bird: class extends self.ISpriteInstance {},
	ButtonPlay: class extends self.IButtonInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	Background: class extends self.ISpriteInstance {},
	BottomPipe: class extends self.ISpriteInstance {},
	TopPipe: class extends self.ISpriteInstance {},
	ScoreText: class extends self.ITextInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Browser: class extends self.IInstance {},
	Touch: class extends self.IInstance {},
	ProgressBar: class extends self.IProgressBarInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	BUTTONPLAY2: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	BaggrounLv2: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	soal: class extends self.ITextInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	jawaban_a: class extends self.ISpriteInstance {},
	No: class extends self.ISpriteInstance {},
	Sprite12: class extends self.ISpriteInstance {},
	patoksoal: class extends self.ISpriteInstance {},
	kunci: class extends self.ISpriteInstance {},
	Sprite13: class extends self.ISpriteInstance {},
	soal2: class extends self.ITextInstance {},
	ja: class extends self.ITextInstance {},
	jb: class extends self.ITextInstance {},
	jc: class extends self.ITextInstance {},
	jd: class extends self.ITextInstance {},
	WINNER: class extends self.ITextInstance {}
}