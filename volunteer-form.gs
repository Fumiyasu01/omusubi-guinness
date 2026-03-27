/**
 * おむすびギネス糸島 2026 - ボランティア応募フォーム作成スクリプト
 *
 * 使い方:
 * 1. https://script.google.com で「新しいプロジェクト」を作成
 * 2. このコードを貼り付ける
 * 3. 関数「createVolunteerForm」を選択して ▶（実行）
 * 4. 初回は権限の承認が必要
 * 5. 実行ログにフォームURL・スプレッドシートURLが出力される
 */

function createVolunteerForm() {
  // === フォーム作成 ===
  var form = FormApp.create('おむすびギネス糸島 2026 ボランティア応募フォーム');
  form.setDescription(
    '世界記録への挑戦を、一緒につくりませんか。\n\n' +
    'ボランティアは参加費無料です。\n' +
    '担当業務終了後、ギネスチャレンジにも参加できます。\n\n' +
    '以下のフォームに必要事項をご記入のうえ、お申し込みください。'
  );
  form.setConfirmationMessage(
    'ボランティアへのご応募ありがとうございます！\n\n' +
    '内容を確認のうえ、ご登録いただいたメールアドレスにご連絡いたします。\n' +
    '公式サイト: https://omusubi-guinness-itoshima.com'
  );
  form.setCollectEmail(true);
  form.setAllowResponseEdits(false);
  form.setLimitOneResponsePerUser(false);

  // ==========================================
  // 基本情報
  // ==========================================
  form.addTextItem()
      .setTitle('お名前（フルネーム）')
      .setRequired(true);

  form.addTextItem()
      .setTitle('ふりがな')
      .setRequired(true);

  form.addTextItem()
      .setTitle('電話番号')
      .setHelpText('当日連絡が取れる番号をご記入ください')
      .setRequired(true);

  // ==========================================
  // 従事可能日時（複数回答）
  // ==========================================
  form.addCheckboxItem()
      .setTitle('従事可能な日時を選んでください（複数選択可）')
      .setChoiceValues([
        '5/29（金）20:00〜22:00',
        '5/30（土）早朝〜',
        '5/30（土）8:45〜11:00',
        '5/30（土）10:00〜',
        '5/30（土）10:30〜'
      ])
      .setRequired(true);

  // ==========================================
  // 参加したいボランティア（参考・複数回答）
  // ==========================================
  form.addCheckboxItem()
      .setTitle('（参考）参加したいボランティアを選んでください（複数選択可）')
      .setHelpText(
        'おむすびボランティア: お米を炊くお手伝い\n' +
        '会場受付ボランティア: 決済済み参加者の確認・案内\n' +
        '会場設営ボランティア: シート敷き・テーブル設置\n' +
        '会場案内ボランティア: バス停・駐車場から体育館への案内'
      )
      .setChoiceValues([
        'おむすびボランティア',
        '会場受付ボランティア',
        '会場設営ボランティア',
        '会場案内ボランティア'
      ]);

  // ==========================================
  // 備考
  // ==========================================
  form.addParagraphTextItem()
      .setTitle('備考・ご質問')
      .setHelpText('ご質問やご要望があればご記入ください');

  // ==========================================
  // スプレッドシート連携
  // ==========================================
  var ss = SpreadsheetApp.create('おむすびギネス糸島_ボランティア応募');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  // ==========================================
  // 結果出力
  // ==========================================
  Logger.log('========================================');
  Logger.log('ボランティア応募フォーム作成完了！');
  Logger.log('========================================');
  Logger.log('フォームURL（公開用）: ' + form.getPublishedUrl());
  Logger.log('フォーム編集URL: ' + form.getEditUrl());
  Logger.log('スプレッドシートURL: ' + ss.getUrl());
  Logger.log('========================================');
}
