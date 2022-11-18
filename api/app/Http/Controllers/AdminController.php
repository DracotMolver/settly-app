<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Access;

class AdminController extends Controller
{
  protected $access;

  /**
   * Instantiate a new controller instance.
   *
   * @return void
   */
  public function __construct(Access $access)
  {
    $this->access = $access;

    $this->middleware('auth.token');
  }

  /**
   * retrieves all the clientes by admin that has the access
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function index(Request $request)
  {
    $adminUser = $this->access->findByToken($request->bearerToken())
      ->admin()
      ->first();

    return response()->json($adminUser, 200);
  }
}
