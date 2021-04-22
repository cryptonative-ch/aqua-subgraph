// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class MesaFactory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save MesaFactory entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save MesaFactory entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("MesaFactory", id.toString(), this);
  }

  static load(id: string): MesaFactory | null {
    return store.get("MesaFactory", id) as MesaFactory | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get saleCount(): i32 {
    let value = this.get("saleCount");
    return value.toI32();
  }

  set saleCount(value: i32) {
    this.set("saleCount", Value.fromI32(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get feeManager(): Bytes {
    let value = this.get("feeManager");
    return value.toBytes();
  }

  set feeManager(value: Bytes) {
    this.set("feeManager", Value.fromBytes(value));
  }

  get feeTo(): Bytes {
    let value = this.get("feeTo");
    return value.toBytes();
  }

  set feeTo(value: Bytes) {
    this.set("feeTo", Value.fromBytes(value));
  }

  get templateManager(): Bytes {
    let value = this.get("templateManager");
    return value.toBytes();
  }

  set templateManager(value: Bytes) {
    this.set("templateManager", Value.fromBytes(value));
  }

  get templateLauncher(): Bytes {
    let value = this.get("templateLauncher");
    return value.toBytes();
  }

  set templateLauncher(value: Bytes) {
    this.set("templateLauncher", Value.fromBytes(value));
  }

  get saleFee(): BigDecimal {
    let value = this.get("saleFee");
    return value.toBigDecimal();
  }

  set saleFee(value: BigDecimal) {
    this.set("saleFee", Value.fromBigDecimal(value));
  }

  get feeNumerator(): BigDecimal {
    let value = this.get("feeNumerator");
    return value.toBigDecimal();
  }

  set feeNumerator(value: BigDecimal) {
    this.set("feeNumerator", Value.fromBigDecimal(value));
  }

  get templateFee(): BigDecimal {
    let value = this.get("templateFee");
    return value.toBigDecimal();
  }

  set templateFee(value: BigDecimal) {
    this.set("templateFee", Value.fromBigDecimal(value));
  }
}

export class FairSale extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save FairSale entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save FairSale entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("FairSale", id.toString(), this);
  }

  static load(id: string): FairSale | null {
    return store.get("FairSale", id) as FairSale | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): i32 {
    let value = this.get("createdAt");
    return value.toI32();
  }

  set createdAt(value: i32) {
    this.set("createdAt", Value.fromI32(value));
  }

  get updatedAt(): i32 {
    let value = this.get("updatedAt");
    return value.toI32();
  }

  set updatedAt(value: i32) {
    this.set("updatedAt", Value.fromI32(value));
  }

  get deletedAt(): i32 {
    let value = this.get("deletedAt");
    return value.toI32();
  }

  set deletedAt(value: i32) {
    this.set("deletedAt", Value.fromI32(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (value === null) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(value as string));
    }
  }

  get status(): string {
    let value = this.get("status");
    return value.toString();
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }

  get startDate(): i32 {
    let value = this.get("startDate");
    return value.toI32();
  }

  set startDate(value: i32) {
    this.set("startDate", Value.fromI32(value));
  }

  get endDate(): i32 {
    let value = this.get("endDate");
    return value.toI32();
  }

  set endDate(value: i32) {
    this.set("endDate", Value.fromI32(value));
  }

  get tokenAmount(): BigDecimal {
    let value = this.get("tokenAmount");
    return value.toBigDecimal();
  }

  set tokenAmount(value: BigDecimal) {
    this.set("tokenAmount", Value.fromBigDecimal(value));
  }

  get minimumBidAmount(): BigDecimal {
    let value = this.get("minimumBidAmount");
    return value.toBigDecimal();
  }

  set minimumBidAmount(value: BigDecimal) {
    this.set("minimumBidAmount", Value.fromBigDecimal(value));
  }

  get tokenIn(): string {
    let value = this.get("tokenIn");
    return value.toString();
  }

  set tokenIn(value: string) {
    this.set("tokenIn", Value.fromString(value));
  }

  get tokenOut(): string {
    let value = this.get("tokenOut");
    return value.toString();
  }

  set tokenOut(value: string) {
    this.set("tokenOut", Value.fromString(value));
  }

  get minFundingThreshold(): i32 {
    let value = this.get("minFundingThreshold");
    return value.toI32();
  }

  set minFundingThreshold(value: i32) {
    this.set("minFundingThreshold", Value.fromI32(value));
  }

  get bids(): Array<string> | null {
    let value = this.get("bids");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set bids(value: Array<string> | null) {
    if (value === null) {
      this.unset("bids");
    } else {
      this.set("bids", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class FairSaleBid extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save FairSaleBid entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save FairSaleBid entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("FairSaleBid", id.toString(), this);
  }

  static load(id: string): FairSaleBid | null {
    return store.get("FairSaleBid", id) as FairSaleBid | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sale(): string {
    let value = this.get("sale");
    return value.toString();
  }

  set sale(value: string) {
    this.set("sale", Value.fromString(value));
  }

  get status(): string {
    let value = this.get("status");
    return value.toString();
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }

  get createdAt(): i32 {
    let value = this.get("createdAt");
    return value.toI32();
  }

  set createdAt(value: i32) {
    this.set("createdAt", Value.fromI32(value));
  }

  get updatedAt(): i32 {
    let value = this.get("updatedAt");
    return value.toI32();
  }

  set updatedAt(value: i32) {
    this.set("updatedAt", Value.fromI32(value));
  }

  get deletedAt(): i32 {
    let value = this.get("deletedAt");
    return value.toI32();
  }

  set deletedAt(value: i32) {
    this.set("deletedAt", Value.fromI32(value));
  }

  get tokenInAmount(): BigDecimal {
    let value = this.get("tokenInAmount");
    return value.toBigDecimal();
  }

  set tokenInAmount(value: BigDecimal) {
    this.set("tokenInAmount", Value.fromBigDecimal(value));
  }

  get tokenOutAmount(): BigDecimal {
    let value = this.get("tokenOutAmount");
    return value.toBigDecimal();
  }

  set tokenOutAmount(value: BigDecimal) {
    this.set("tokenOutAmount", Value.fromBigDecimal(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }
}

export class FixedPriceSale extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save FixedPriceSale entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save FixedPriceSale entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("FixedPriceSale", id.toString(), this);
  }

  static load(id: string): FixedPriceSale | null {
    return store.get("FixedPriceSale", id) as FixedPriceSale | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): i32 {
    let value = this.get("createdAt");
    return value.toI32();
  }

  set createdAt(value: i32) {
    this.set("createdAt", Value.fromI32(value));
  }

  get updatedAt(): i32 {
    let value = this.get("updatedAt");
    return value.toI32();
  }

  set updatedAt(value: i32) {
    this.set("updatedAt", Value.fromI32(value));
  }

  get deletedAt(): i32 {
    let value = this.get("deletedAt");
    return value.toI32();
  }

  set deletedAt(value: i32) {
    this.set("deletedAt", Value.fromI32(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get status(): string {
    let value = this.get("status");
    return value.toString();
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }

  get startDate(): i32 {
    let value = this.get("startDate");
    return value.toI32();
  }

  set startDate(value: i32) {
    this.set("startDate", Value.fromI32(value));
  }

  get endDate(): i32 {
    let value = this.get("endDate");
    return value.toI32();
  }

  set endDate(value: i32) {
    this.set("endDate", Value.fromI32(value));
  }

  get tokenPrice(): BigDecimal {
    let value = this.get("tokenPrice");
    return value.toBigDecimal();
  }

  set tokenPrice(value: BigDecimal) {
    this.set("tokenPrice", Value.fromBigDecimal(value));
  }

  get sellAmount(): BigDecimal {
    let value = this.get("sellAmount");
    return value.toBigDecimal();
  }

  set sellAmount(value: BigDecimal) {
    this.set("sellAmount", Value.fromBigDecimal(value));
  }

  get minimumRaise(): BigDecimal {
    let value = this.get("minimumRaise");
    return value.toBigDecimal();
  }

  set minimumRaise(value: BigDecimal) {
    this.set("minimumRaise", Value.fromBigDecimal(value));
  }

  get allocationMin(): BigDecimal {
    let value = this.get("allocationMin");
    return value.toBigDecimal();
  }

  set allocationMin(value: BigDecimal) {
    this.set("allocationMin", Value.fromBigDecimal(value));
  }

  get allocationMax(): BigDecimal {
    let value = this.get("allocationMax");
    return value.toBigDecimal();
  }

  set allocationMax(value: BigDecimal) {
    this.set("allocationMax", Value.fromBigDecimal(value));
  }

  get tokenIn(): string {
    let value = this.get("tokenIn");
    return value.toString();
  }

  set tokenIn(value: string) {
    this.set("tokenIn", Value.fromString(value));
  }

  get tokenOut(): string {
    let value = this.get("tokenOut");
    return value.toString();
  }

  set tokenOut(value: string) {
    this.set("tokenOut", Value.fromString(value));
  }

  get purchases(): Array<string> | null {
    let value = this.get("purchases");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set purchases(value: Array<string> | null) {
    if (value === null) {
      this.unset("purchases");
    } else {
      this.set("purchases", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class FixedPriceSalePurchase extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save FixedPriceSalePurchase entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save FixedPriceSalePurchase entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("FixedPriceSalePurchase", id.toString(), this);
  }

  static load(id: string): FixedPriceSalePurchase | null {
    return store.get(
      "FixedPriceSalePurchase",
      id
    ) as FixedPriceSalePurchase | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): i32 {
    let value = this.get("createdAt");
    return value.toI32();
  }

  set createdAt(value: i32) {
    this.set("createdAt", Value.fromI32(value));
  }

  get updatedAt(): i32 {
    let value = this.get("updatedAt");
    return value.toI32();
  }

  set updatedAt(value: i32) {
    this.set("updatedAt", Value.fromI32(value));
  }

  get deletedAt(): i32 {
    let value = this.get("deletedAt");
    return value.toI32();
  }

  set deletedAt(value: i32) {
    this.set("deletedAt", Value.fromI32(value));
  }

  get sale(): string {
    let value = this.get("sale");
    return value.toString();
  }

  set sale(value: string) {
    this.set("sale", Value.fromString(value));
  }

  get buyer(): Bytes {
    let value = this.get("buyer");
    return value.toBytes();
  }

  set buyer(value: Bytes) {
    this.set("buyer", Value.fromBytes(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Token entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Token entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Token", id.toString(), this);
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (value === null) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(value as string));
    }
  }

  get symbol(): string | null {
    let value = this.get("symbol");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set symbol(value: string | null) {
    if (value === null) {
      this.unset("symbol");
    } else {
      this.set("symbol", Value.fromString(value as string));
    }
  }

  get decimals(): BigInt {
    let value = this.get("decimals");
    return value.toBigInt();
  }

  set decimals(value: BigInt) {
    this.set("decimals", Value.fromBigInt(value));
  }
}

export class SaleUser extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save SaleUser entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save SaleUser entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("SaleUser", id.toString(), this);
  }

  static load(id: string): SaleUser | null {
    return store.get("SaleUser", id) as SaleUser | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes | null {
    let value = this.get("address");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set address(value: Bytes | null) {
    if (value === null) {
      this.unset("address");
    } else {
      this.set("address", Value.fromBytes(value as Bytes));
    }
  }
}

export class SaleTemplate extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save SaleTemplate entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save SaleTemplate entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("SaleTemplate", id.toString(), this);
  }

  static load(id: string): SaleTemplate | null {
    return store.get("SaleTemplate", id) as SaleTemplate | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): i32 {
    let value = this.get("createdAt");
    return value.toI32();
  }

  set createdAt(value: i32) {
    this.set("createdAt", Value.fromI32(value));
  }

  get updatedAt(): i32 {
    let value = this.get("updatedAt");
    return value.toI32();
  }

  set updatedAt(value: i32) {
    this.set("updatedAt", Value.fromI32(value));
  }

  get deletedAt(): i32 {
    let value = this.get("deletedAt");
    return value.toI32();
  }

  set deletedAt(value: i32) {
    this.set("deletedAt", Value.fromI32(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get factory(): Bytes {
    let value = this.get("factory");
    return value.toBytes();
  }

  set factory(value: Bytes) {
    this.set("factory", Value.fromBytes(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get verified(): boolean {
    let value = this.get("verified");
    return value.toBoolean();
  }

  set verified(value: boolean) {
    this.set("verified", Value.fromBoolean(value));
  }
}

export class MesaLog extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save MesaLog entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save MesaLog entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("MesaLog", id.toString(), this);
  }

  static load(id: string): MesaLog | null {
    return store.get("MesaLog", id) as MesaLog | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get content(): string {
    let value = this.get("content");
    return value.toString();
  }

  set content(value: string) {
    this.set("content", Value.fromString(value));
  }
}
