import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [],
  template: `
    <div class="container py-5">

    <h2 class="fw-bold mb-4">
        Shopping Cart
        <span class="text-secondary fs-5">(3 Items)</span>
    </h2>

    <div class="row g-4">

        <!-- LEFT -->
        <div class="col-lg-8">

            <!-- Cart Item -->
            <div class="card border-0 shadow-sm rounded-4 mb-4">
                <div class="card-body">

                    <div class="row align-items-center">

                        <div class="col-md-2 text-center">
                            <img src="https://via.placeholder.com/120"
                                 class="img-fluid rounded-3">
                        </div>

                        <div class="col-md-5">

                            <h5 class="fw-bold mb-1">
                                Apple AirPods Pro
                            </h5>

                            <p class="text-muted mb-2">
                                White | Wireless
                            </p>

                            <span class="badge bg-success">
                                In Stock
                            </span>

                        </div>

                        <div class="col-md-2 text-center">

                            <h5 class="fw-bold text-primary">
                                ₹24,999
                            </h5>

                        </div>

                        <div class="col-md-2">

                            <div class="input-group">

                                <button class="btn btn-outline-secondary">
                                    -
                                </button>

                                <input type="text"
                                       class="form-control text-center"
                                       value="1">

                                <button class="btn btn-outline-secondary">
                                    +
                                </button>

                            </div>

                        </div>

                        <div class="col-md-1 text-end">

                            <button class="btn btn-light text-danger">

                                <i class="fa-solid fa-trash-can"></i>

                            </button>

                        </div>

                    </div>

                </div>
            </div>

            <!-- Repeat Card -->
            <div class="card border-0 shadow-sm rounded-4">
                <div class="card-body">

                    <div class="row align-items-center">

                        <div class="col-md-2 text-center">
                            <img src="https://via.placeholder.com/120"
                                 class="img-fluid rounded-3">
                        </div>

                        <div class="col-md-5">

                            <h5 class="fw-bold">
                                Logitech MX Master 3S
                            </h5>

                            <p class="text-muted">
                                Graphite
                            </p>

                            <span class="badge bg-success">
                                In Stock
                            </span>

                        </div>

                        <div class="col-md-2 text-center">

                            <h5 class="fw-bold text-primary">
                                ₹8,999
                            </h5>

                        </div>

                        <div class="col-md-2">

                            <div class="input-group">

                                <button class="btn btn-outline-secondary">
                                    -
                                </button>

                                <input class="form-control text-center"
                                       value="2">

                                <button class="btn btn-outline-secondary">
                                    +
                                </button>

                            </div>

                        </div>

                        <div class="col-md-1 text-end">

                            <button class="btn btn-light text-danger">

                                <i class="fa-solid fa-trash-can"></i>

                            </button>

                        </div>

                    </div>

                </div>
            </div>

        </div>

        <!-- RIGHT -->
        <div class="col-lg-4">

            <div class="card border-0 shadow rounded-4 sticky-top"
                 style="top:20px;">

                <div class="card-body p-4">

                    <h4 class="fw-bold mb-4">
                        Order Summary
                    </h4>

                    <div class="d-flex justify-content-between mb-3">
                        <span>Subtotal</span>
                        <strong>₹42,997</strong>
                    </div>

                    <div class="d-flex justify-content-between mb-3">
                        <span>Shipping</span>

                        <span class="text-success">
                            FREE
                        </span>
                    </div>

                    <div class="d-flex justify-content-between mb-3">
                        <span>Discount</span>

                        <span class="text-danger">
                            -₹2,000
                        </span>
                    </div>

                    <hr>

                    <div class="d-flex justify-content-between mb-4">

                        <h5 class="fw-bold">
                            Total
                        </h5>

                        <h4 class="fw-bold text-primary">
                            ₹40,997
                        </h4>

                    </div>

                    <div class="mb-3">

                        <input type="text"
                               class="form-control rounded-3"
                               placeholder="Coupon Code">

                    </div>

                    <button class="btn btn-dark w-100 rounded-3 py-3 fw-bold">
                        Apply Coupon
                    </button>

                    <button class="btn btn-success w-100 rounded-3 py-3 fw-bold mt-3">

                        Proceed to Checkout

                    </button>

                    <div class="text-center mt-4">

                        <small class="text-muted">

                            🔒 Secure SSL Payment

                        </small>

                    </div>

                </div>

            </div>

        </div>

    </div>

</div>
  `,
  styles: ``,
})
export class CartSummaryPage {}
