# Fast Food - モバイルフードデリバリーアプリ 🍔

YouTube動画チュートリアルを参考に開発したモバイルフードデリバリーアプリです。React Native（Expo）とAppwriteを使用して構築されたクロスプラットフォーム対応のアプリケーションです。

## 📱 スクリーンショット・機能概要

このアプリは以下の主要機能を提供します：

- **ホーム画面**: 特別オファーとプロモーションの表示
- **メニュー検索・フィルタリング**: カテゴリ別検索とリアルタイム検索機能
- **ショッピングカート**: 商品の追加・削除・数量変更機能
- **ユーザー認証**: サインアップ・サインイン機能
- **プロフィール管理**: ユーザー情報の管理

## 🛠 技術スタック

### フロントエンド
- **React Native** (0.81.4) - モバイルアプリ開発フレームワーク
- **Expo** (~54.0.1) - React Nativeアプリの開発・ビルド・デプロイプラットフォーム
- **Expo Router** - ファイルベースルーティング
- **TypeScript** - 型安全な開発
- **NativeWind** (4.1.23) - React Native用Tailwind CSS

### バックエンド・データベース
- **Appwrite** - オープンソースのBaaS（Backend as a Service）
- **React Native Appwrite** (0.13.0) - Appwrite SDK

### 状態管理
- **Zustand** (5.0.8) - 軽量な状態管理ライブラリ

### UI・UX
- **React Navigation** - ナビゲーション管理
- **Expo Vector Icons** - アイコンライブラリ
- **React Native Gesture Handler** - ジェスチャー処理
- **React Native Reanimated** - アニメーション

### その他のツール
- **Sentry** - エラー監視・クラッシュレポート
- **ESLint** - コード品質管理
- **Prettier** - コードフォーマッター

## 🚀 セットアップ・起動方法

### 前提条件
- Node.js (16以上)
- npm または yarn
- Expo CLI
- iOS Simulator（macOS）またはAndroid Emulator

### インストール手順

1. **リポジトリのクローン**
```bash
git clone <repository-url>
cd fast_food
```

2. **依存関係のインストール**
```bash
npm install
```

3. **環境変数の設定**
`.env`ファイルを作成し、Appwriteの設定を追加してください：
```env
EXPO_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
EXPO_PUBLIC_APPWRITE_USER_COLLECTION_ID=your_user_collection_id
EXPO_PUBLIC_APPWRITE_MENU_COLLECTION_ID=your_menu_collection_id
EXPO_PUBLIC_APPWRITE_CATEGORY_COLLECTION_ID=your_category_collection_id
```

4. **アプリの起動**
```bash
npm start
```

5. **デバイスでの実行**
- iOS: `i`を押してiOS Simulatorで起動
- Android: `a`を押してAndroid Emulatorで起動
- 実機: Expo Goアプリでデバイスでの実行

## 📁 プロジェクト構造

```
fast_food/
├── app/                    # Expo Routerによるページ構成
│   ├── (auth)/            # 認証関連画面
│   │   ├── sign-in.tsx
│   │   └── sign-up.tsx
│   └── (tabs)/            # タブナビゲーション画面
│       ├── index.tsx      # ホーム画面
│       ├── search.tsx     # 検索画面
│       ├── cart.tsx       # カート画面
│       └── profile.tsx    # プロフィール画面
├── components/            # 再利用可能コンポーネント
│   ├── CartButton.tsx
│   ├── CartItem.tsx
│   ├── CustomButton.tsx
│   ├── CustomInput.tsx
│   ├── MenuCard.tsx
│   ├── SearchBar.tsx
│   └── Filter.tsx
├── store/                 # Zustand状態管理
│   ├── auth.store.ts
│   └── cart.store.ts
├── lib/                   # ユーティリティ・API関数
├── constants/             # 定数・設定ファイル
└── assets/               # 画像・フォントなどのリソース
```

## 🎯 主要機能

### 認証システム
- Appwriteを使用したユーザー登録・ログイン機能
- セキュアなセッション管理
- エラーハンドリングとSentryとの連携

### メニュー管理
- カテゴリ別メニュー表示
- リアルタイム検索機能
- 商品詳細表示

### ショッピングカート
- 商品の追加・削除・数量変更
- リアルタイム合計金額計算
- 配送料・割引の適用

### レスポンシブデザイン
- iOS・Android両対応
- タブレット対応
- ダークモード対応

## 📱 対応プラットフォーム

- **iOS** (iPhone・iPad対応)
- **Android** (スマートフォン・タブレット対応)
- **Web** (開発環境での確認用)

## 🔧 開発コマンド

```bash
# 開発サーバー起動
npm start

# iOS向けビルド
npm run ios

# Android向けビルド
npm run android

# Web版起動
npm run web

# コードの静的解析
npm run lint

# プロジェクトリセット
npm run reset-project
```

## 🌟 学習ポイント

このプロジェクトで学習できる技術：

1. **React Native + Expo**による基本的なモバイルアプリ開発
2. **TypeScript**を使った型安全な開発
3. **Zustand**による効率的な状態管理
4. **Appwrite**を使ったBaaSの活用
5. **NativeWind**によるTailwind CSSベースのスタイリング
6. **Expo Router**によるファイルベースルーティング
7. **エラー監視**とクラッシュレポート（Sentry）

## 📄 ライセンス

このプロジェクトは学習目的で作成されたものです。

## 🤝 コントリビューション

このプロジェクトは学習用のため、現在コントリビューションは受け付けておりません。

---

**参考**: [YouTube Tutorial Video](https://www.youtube.com/watch?v=LKrX390fJMw&t=124s)